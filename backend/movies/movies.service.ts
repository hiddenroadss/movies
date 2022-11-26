import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private moviesRepo: Repository<Movie>) {}

  find(): Promise<Movie[]> {
    return this.moviesRepo.find();
  }

  findOne(id: number): Promise<Movie> {
    return this.moviesRepo.findOneBy({ id });
  }

  create(movieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.moviesRepo.create(movieDto);
    return this.moviesRepo.save(movie);
  }
}
