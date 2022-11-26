import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  find() {
    return this.moviesService.find();
  }
  @Get('/:id')
  findOne() {
    return this.moviesService.findOne(1);
  }

  @Post()
  create(@Body() movieDto: CreateMovieDto) {
    return this.moviesService.create(movieDto);
  }
}
