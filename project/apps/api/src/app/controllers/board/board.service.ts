import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../../interfaces/board.interface';
import { Boards } from '../../entities/board.entities';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Boards)
    private readonly boardRepository: Repository<Board>
  ) {}

  /**
   * DBに値を書き込む
   */
  create(frontDate: Board) {
    return this.boardRepository.save(frontDate);
  }
  /**
   * DBから値を全件取得する
   */
  async read(id?: number): Promise<Board[] | Board> {
    // IDの指定がない場合は全件値を返す
    if (!id) {
      return this.boardRepository.find();
    }
    // idの指定がある場合該当IDを持つ場合
    const result = await this.findOne(id);
    // 該当するIDがなければエラーを返す
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  /**
   * DBの値を更新する
   */
  async update(frontData: Board): Promise<Board> {
    const res = await this.findOne(frontData.id);
    if (!res) {
      throw new NotFoundException();
    }
    res.title = frontData.title;
    res.text = frontData.text;
    return this.boardRepository.save(res);
  }

  /**
   * DBから値を1件削除する
   */
  async delete(frontData: Board) {
    const res = await this.findOne(frontData.id);
    if (!res) {
      throw new NotFoundException();
    }
    return this.boardRepository.delete(frontData);
  }

  /**
   * DBから値を1件取得す"
   */
  findOne(id: number) {
    return this.boardRepository.findOne(id);
  }
}
