import { Movie } from 'backend/movies/entities/movie.entity';
import { ITalent } from 'interfaces';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Talent implements ITalent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  bio: string;

  @Column()
  birthDate: Date;

  // @Column()
  // images: string[];

  @OneToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
