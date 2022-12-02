import { Mood } from 'backend/moods/entities/mood.entity';
import { IsDate, IsString, ValidateNested } from 'class-validator';
import { Actor } from '../entities/actor.entity';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @ValidateNested({ each: true })
  moods: Mood[];

  @ValidateNested({ each: true })
  actors: Actor[];
}
