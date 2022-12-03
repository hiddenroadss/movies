import { IMovie } from './movie.interface';

export interface IMood {
  id: number;

  name: string;

  description: string;

  movies: IMovie[];
}
