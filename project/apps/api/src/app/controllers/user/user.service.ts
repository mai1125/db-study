import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entities/user.entities';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>
  ) {}
  /**
   * DBに値を書き込む
   */
  create(frontdate: User): Promise<User> {
    return this.userRepository.save(frontdate);
  }

  /**
   * DBから値を全件取得する
   */
  async read(id?: number): Promise<User | User[]> {
    // IDなければ全部返して関数return
    if (!id) {
      return this.userRepository.find();
    }
    // IDあれば該当のデータを返す
    const result = await this.findOne(id);
    if (!result) {
      // なければエラー
      throw new NotFoundException();
    }
    return result;
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

  /**
   * DBから値を1件取得する
   */
  findOne(id: number) {
    return this.userRepository.findOne(id);
  }
}
