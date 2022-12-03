import { IMood } from './mood.interface';
import { IMovieShot } from './movie-shot.interface';
import { IRating } from './rating.interface';
import { IReview } from './review.interface';
import { ITalent } from './talent.interface';

export interface IMovie {
  id: number;

  title: string;

  originalTitle: string;

  slogan: string;

  poster: string;

  releaseDate: Date;

  country: string;

  // director: Talent;

  budget: number;

  fees: number;

  rating: IRating;

  description: string;

  actors: ITalent[];

  moods: IMood[];

  shots: IMovieShot[];

  reviews: IReview[];

  createdAt: Date;

  updatedAt: Date;
}
