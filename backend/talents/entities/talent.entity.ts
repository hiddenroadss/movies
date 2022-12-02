import { Movie } from 'backend/movies/entities/movie.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Talent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @ManyToMany(() => Movie, (movie) => movie.moods)
  movies: Movie[];
}
