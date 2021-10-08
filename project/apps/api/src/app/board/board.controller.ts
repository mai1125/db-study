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
  read(@Query('id') id?: number) {
    return this.boardService.read(id);
  }

  @Post('update')
  update(@Body() frontdata: Board) {
    return this.boardService.update(frontdata);
  }

  @Get('delete')
  delete(@Query() frontdata: Board) {
    return this.boardService.delete(frontdata);
  }

  @Get('findone')
  findone(@Query() frontdata: Board) {
    return this.boardService.findOne(frontdata.id);
  }
}
