import { MovieDto } from 'backend/movies/dtos/movie.dto';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { IMood, IMovie } from 'interfaces';

export class MoodDto implements Omit<IMood, 'id'> {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsString()
  @Length(5, 500)
  @IsOptional()
  description: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => MovieDto)
  movies: IMovie[];
}
