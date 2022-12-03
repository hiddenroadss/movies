import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

enum RatingStars {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

@Entity()
export class Rating {
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
