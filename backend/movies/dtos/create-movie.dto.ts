import { Mood } from 'backend/moods/entities/mood.entity';
import { Talent } from 'backend/talents/entities/talent.entity';
import { IsDate, IsString, ValidateNested } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @ValidateNested({ each: true })
  moods: Mood[];

  @ValidateNested({ each: true })
  actors: Talent[];
}
