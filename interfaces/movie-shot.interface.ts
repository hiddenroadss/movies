import { IMovie } from './movie.interface';

export interface IMovieShot {
  id: number;

  title: string;

  description: string;

  url: string;

  movie: IMovie;
}
