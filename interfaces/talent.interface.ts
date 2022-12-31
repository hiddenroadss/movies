import { IMovie } from './movie.interface';

export interface ITalent {
  id: number;

  name: string;

  birthDate: Date;

  bio: string;

  // images: string[];

  movies: IMovie[];
}
