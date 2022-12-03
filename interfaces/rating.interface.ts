import { IMovie } from './movie.interface';

export interface IRating {
  id: number;

  stars: RatingStars;

  movie: IMovie;
}

export enum RatingStars {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}
