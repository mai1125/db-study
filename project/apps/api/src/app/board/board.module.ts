import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './board.controller';
import { Boards } from './board.entities';
import { BoardService } from './board.service';

@Module({
  imports: [TypeOrmModule.forFeature([Boards])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
