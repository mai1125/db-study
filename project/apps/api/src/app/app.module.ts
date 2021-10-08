import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// TypeORMのEntities
import { Users } from './entities/user.entities';
import { Boards } from './entities/board.entities';
const entities = [Users, Boards];

// Controllers
import { UserController } from './controllers/user/user.controller';
import { BoardController } from './controllers/board/board.controller';
const controllers = [UserController, BoardController];

// Services
import { UserService } from './controllers/user/user.service';
import { BoardService } from './controllers/board/board.service';
const services = [UserService, BoardService];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'demo',
      entities: [...entities],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([...entities]),
  ],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
