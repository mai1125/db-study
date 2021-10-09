import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() fronfdata: User): Promise<User> {
    return this.userService.create(fronfdata);
  }

  @Get('read')
  read(@Query('id') id?: number) {
    return this.userService.read(id);
  }

  @Post('update')
  update(@Body() frontData: User) {
    return this.userService.update(frontData);
  }

  @Get('delete')
  delete(@Query('id') id: number) {
    return this.userService.delete(id);
  }

  @Get('findone')
  findOne(@Query() frontData: User) {
    return this.userService.findOne(frontData.id);
  }
}
