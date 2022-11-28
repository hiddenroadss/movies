import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'backend/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { Mood } from './entities/mood.entity';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private moviesRepo: Repository<Movie>,
    @InjectRepository(Mood) private moodRepo: Repository<Mood>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto): Promise<Movie[]> {
    const { limit, offset } = paginationQuery;
    return this.moviesRepo.find({
      relations: ['moods'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepo.findOne({
      where: {
        id,
      },
      relations: ['moods'],
    });
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} is not found`);
    }

    return movie;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const moods = await Promise.all(
      createMovieDto.moods.map((mood) => this.preloadMoodByName(mood)),
    );
    console.log(moods);
    const movie = this.moviesRepo.create({
      ...createMovieDto,
      moods,
    });
    return this.moviesRepo.save(movie);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const moods =
      updateMovieDto.moods &&
      (await Promise.all(
        updateMovieDto.moods.map((mood) => this.preloadMoodByName(mood)),
      ));
    const movie = await this.moviesRepo.preload({
      id: +id,
      ...updateMovieDto,
      moods,
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} is not found`);
    }

    return this.moviesRepo.save(movie);
  }

  async remove(id: string): Promise<Movie> {
    const movie = await this.moviesRepo.findOneBy({ id: +id });
    return this.moviesRepo.remove(movie);
  }

  private async preloadMoodByName(name: string): Promise<Mood> {
    const existingMood = await this.moodRepo.findOneBy({ name });
    if (existingMood) {
      return existingMood;
    }

    return this.moodRepo.create({ name });
  }
}
