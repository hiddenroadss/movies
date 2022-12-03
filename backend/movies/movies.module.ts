import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodsModule } from 'backend/moods/moods.module';
import { Movie } from './entities/movie.entity';
import { MovieShot } from './entities/movies-shots.entity';
import { Rating } from './entities/rating.entity';
import { Review } from './entities/review.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  imports: [
    TypeOrmModule.forFeature([Movie, MovieShot, Rating, Review]),
    MoodsModule,
  ],
  providers: [MoviesService],
})
export class MoviesModule {}
