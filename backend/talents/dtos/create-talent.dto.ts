import { Movie } from 'backend/movies/entities/movie.entity';
import { IsDate, IsString, ValidateNested } from 'class-validator';

export class CreateTalentDto {
  @IsString()
  name: string;

  @IsString()
  bio: string;

  @ValidateNested({ each: true })
  movies: Movie[];
}
