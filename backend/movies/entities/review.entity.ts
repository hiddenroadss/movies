import { User } from 'backend/users/entities/user.entity';
import { IReview } from 'interfaces';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Review implements IReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  movie: Movie;
}
