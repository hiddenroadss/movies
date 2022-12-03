import { IMovie } from './movie.interface';

export interface ITalent {
  id: number;

  name: string;

  age: number;

  bio: string;

  // images: string[];

  movies: IMovie[];
}
