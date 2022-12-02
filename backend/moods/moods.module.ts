import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mood } from './entities/mood.entity';
import { MoodsController } from './moods.controller';
import { MoodsService } from './moods.service';

@Module({
  controllers: [MoodsController],
  providers: [MoodsService],
  imports: [TypeOrmModule.forFeature([Mood])],
})
export class MoodsModule {}
