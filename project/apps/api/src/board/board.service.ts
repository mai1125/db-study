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
  read(): Promise<Board[]> {
    return this.boardRepository.find();
  }
  /**
   * DBから値を1件取得する
   */
  findone(id: number) {
    return this.boardRepository.findOne(id);
  }

  /**
   * DBの値を更新する
   */
  async update(frontdata: Board): Promise<Board> {
    const updateBoard = await this.findone(frontdata.id);
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
}
