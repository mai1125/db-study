import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../interface/interface';
import { Boards } from './board.entities';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Boards)
    private readonly boardRepository: Repository<Board>
  ) {}

  /**
   * DBに値を書き込む
   */
  create(frontdate: Board) {
    return this.boardRepository.save(frontdate);
  }
  /**
   * DBから値を全件取得する
   */
  read(id?: number): Promise<Board> | Promise<Board[]> {
    if (id) {
      // return this.userRepository.find();
      return this.findOne(id);
    } else {
      // ID指定なければ全て取得
      return this.boardRepository.find();
    }
  }

  /**
   * DBの値を更新する
   */
  async update(frontdata: Board): Promise<Board> {
    const updateBoard = await this.findOne(frontdata.id);
    updateBoard.title = frontdata.title;
    updateBoard.text = frontdata.text;
    return this.boardRepository.save(updateBoard);
  }

  /**
   * DBから値を1件削除する
   */
  delete(frontdata: Board) {
    return this.boardRepository.delete(frontdata);
  }

  /**
   * DBから値を1件取得する
   */
  findOne(id: number) {
    return this.boardRepository.findOne(id);
  }
}
