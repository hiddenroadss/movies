import { Movie } from 'backend/movies/entities/movie.entity';
import { IMood } from 'interfaces';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mood implements IMood {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => Movie, (movie) => movie.moods)
  movies: Movie[];
}
