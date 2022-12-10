import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodsModule } from 'backend/moods/moods.module';
import { diskStorage } from 'multer';
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
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/movies',
        filename(req, file: Express.Multer.File, callback) {
          callback(null, `${req.params.id}_poster.png`);
        },
      }),
    }),
  ],
  providers: [MoviesService],
})
export class MoviesModule {}
