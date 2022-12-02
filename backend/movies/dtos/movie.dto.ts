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

export class MovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  originalTitle: string;

  @IsDate()
  releaseDate: Date;

  @IsOptional()
  @ValidateNested()
  director: Talent;

  @IsNumber()
  duration: number;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @ValidateNested({ each: true })
  moods: Mood[];

  @IsOptional()
  @ValidateNested({ each: true })
  actors: Talent[];
}
