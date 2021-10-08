import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../interface/interface';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
