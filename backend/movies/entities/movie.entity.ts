import { Mood } from 'backend/moods/entities/mood.entity';
import { Talent } from 'backend/talents/entities/talent.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Talent, (actor) => actor.movies)
  actors: Talent[];

  @JoinTable()
  @ManyToMany(() => Mood, (mood) => mood.movies, {
    cascade: true,
  })
  moods: Mood[];
}
