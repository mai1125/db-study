import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
// User
import { Users } from '../user/user.entities';
import { UserModule } from '../user/user.module';
// Board
import { Boards } from '../board/board.entities';
import { BoardModule } from '../board/board.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'demo',
      entities: [Users, Boards],
      synchronize: true,
    }),
    UserModule,
    BoardModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
