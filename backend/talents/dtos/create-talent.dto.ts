import { Movie } from 'backend/movies/entities/movie.entity';
import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ITalent } from 'interfaces';

export class CreateTalentDto implements Omit<ITalent, 'id'> {
  @IsString()
  name: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  bio: string;

  @IsString()
  country: string;

  @ValidateNested({ each: true })
  movies: Movie[];
}
