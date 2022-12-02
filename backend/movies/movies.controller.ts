import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { Public } from 'backend/common/decorators/public.decorator';
import { PaginationQueryDto } from 'backend/common/dto/pagination-query.dto';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { MoviesService } from './movies.service';

@Public()
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.moviesService.findAll(paginationQuery);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
