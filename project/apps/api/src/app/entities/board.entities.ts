import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../interfaces/board.interface';

@Entity()
export class Boards implements Board {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  text: string;
}
