import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Users } from '../user/user.entities';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'demo',
      entities: [Users],
      synchronize: true,
    }),
    UserModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
