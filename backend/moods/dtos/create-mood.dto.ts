import { Movie } from 'backend/movies/entities/movie.entity';
import { IsDate, IsString, ValidateNested } from 'class-validator';

export class CreateMoodDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @ValidateNested({ each: true })
  movies: Movie[];
}
