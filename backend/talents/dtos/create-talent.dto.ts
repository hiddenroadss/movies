import { Movie } from 'backend/movies/entities/movie.entity';
import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ITalent } from 'interfaces';

export class CreateTalentDto implements Omit<ITalent, 'id'> {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  bio: string;

  @ValidateNested({ each: true })
  movies: Movie[];
}
