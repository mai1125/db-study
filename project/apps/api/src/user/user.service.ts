import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entities';
import { User } from '../interface/interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>
  ) {}
  /**
   * DBに値を書き込む
   */
  async create(data: User): Promise<User> {
    return await this.userRepository.save(data);
  }

  /**
   * DBから値を全件取得する
   */
  read(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * DBから値を1件取得する
   */
  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  /**
   * DBに登録した情報を更新
   */
  async update(frontData: User): Promise<User> {
    const newUser = await this.findOne(frontData.id);
    newUser.name = frontData.name;
    newUser.age = frontData.age;
    return this.userRepository.save(newUser);
  }

  /**
   * DBに登録された情報を１件削除
   */

  async delete(frontData: User) {
    return await this.userRepository.delete(frontData);
  }
}
