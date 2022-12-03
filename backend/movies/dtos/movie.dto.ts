import { Mood } from 'backend/moods/entities/mood.entity';
import { Talent } from 'backend/talents/entities/talent.entity';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IMovie } from 'interfaces';
import { MovieShot } from '../entities/movies-shots.entity';

export class MovieDto implements Omit<IMovie, 'id'> {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  originalTitle: string;

  @IsString()
  @IsOptional()
  slogan: string;

  @IsString()
  @IsOptional()
  poster: string;

  @IsDate()
  releaseDate: Date;

  @IsString()
  @IsOptional()
  country: string;

  // @IsOptional()
  // @ValidateNested()
  // director: Talent;

  @IsNumber()
  @IsOptional()
  budget: number;

  @IsNumber()
  @IsOptional()
  fees: number;

  @IsNumber()
  duration: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @ValidateNested({ each: true })
  moods: Mood[];

  @IsOptional()
  @ValidateNested({ each: true })
  actors: Talent[];

  @IsOptional()
  @ValidateNested({ each: true })
  shots: MovieShot[];
}
