import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interface/interface';

type UserPK = Pick<User, 'id'>;

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() fronfdata: User): Promise<User> {
    return this.userService.create(fronfdata);
  }

  @Get('read')
  read() {
    return this.userService.read();
  }

  @Get('findone')
  findOne(@Query() frontData: UserPK) {
    return this.userService.findOne(frontData.id);
  }

  @Post('update')
  update(@Body() frontData: User) {
    return this.userService.update(frontData);
  }

  @Get('delete')
  delete(@Query() frontData: User) {
    return this.userService.delete(frontData);
  }
}
