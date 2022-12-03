import { Movie } from 'backend/movies/entities/movie.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Talent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  bio: string;

  // @Column()
  // images: string[];

  @OneToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
