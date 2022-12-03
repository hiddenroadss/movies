import { IRating, RatingStars } from 'interfaces/rating.interface';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Rating implements IRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RatingStars,
    default: RatingStars.ZERO,
  })
  stars: number;

  @OneToOne(() => Movie, (movie) => movie.rating)
  movie: Movie;
}
