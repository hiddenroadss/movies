import { Mood } from 'backend/moods/entities/mood.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Actor } from './actor.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Actor, (actor) => actor.movies)
  actors: Actor[];

  @JoinTable()
  @ManyToMany(() => Mood, (mood) => mood.movies, {
    cascade: true,
  })
  moods: Mood[];
}
