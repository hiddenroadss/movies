import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talent } from './entities/talent.entity';
import { TalentsController } from './talents.controller';
import { TalentsService } from './talents.service';

@Module({
  controllers: [TalentsController],
  providers: [TalentsService],
  imports: [TypeOrmModule.forFeature([Talent])],
})
export class TalentsModule {}
