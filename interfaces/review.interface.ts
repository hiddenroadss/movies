import { IMovie } from './movie.interface';
import { IUser } from './user.interface';

export interface IReview {
  id: number;

  text: string;

  user: IUser;

  movie: IMovie;
}
