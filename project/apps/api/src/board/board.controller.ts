import { BoardService } from './board.service';
import { Board } from '../interface/interface';
import { Post, Body, Controller, Get, Query } from '@nestjs/common';

@Controller('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('create')
  create(@Body() frontdate: Board) {
    return this.boardService.create(frontdate);
  }

  @Get('read')
  read() {
    return this.boardService.read();
  }

  @Get('findone')
  findone(@Query() frontdata: Board) {
    return this.boardService.findone(frontdata.id);
  }

  @Post('update')
  update(@Body() frontdata: Board) {
    return this, this.boardService.update(frontdata);
  }

  @Get('delete')
  delete(@Query() frontdata: Board) {
    return this.boardService.delete(frontdata);
  }
}
