import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'backend/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateMoodDto } from './dtos/create-mood.dto';
import { UpdateMoodDto } from './dtos/update-mood.dto';
import { Mood } from './entities/mood.entity';

@Injectable()
export class MoodsService {
  constructor(@InjectRepository(Mood) private moodRepo: Repository<Mood>) {}

  findAll(paginationQuery: PaginationQueryDto): Promise<Mood[]> {
    const { limit, offset } = paginationQuery;
    return this.moodRepo.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Mood> {
    const movie = await this.moodRepo.findOne({
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

  async create(createMovieDto: CreateMoodDto): Promise<Mood> {
    const movie = this.moodRepo.create({
      ...createMovieDto,
    });
    return this.moodRepo.save(movie);
  }

  async update(id: string, updateMovieDto: UpdateMoodDto): Promise<Mood> {
    // const moods =
    //   updateMovieDto.moods &&
    //   (await Promise.all(
    //     updateMovieDto.moods.map((mood) => this.preloadMoodByName(mood.name)),
    //   ));
    const movie = await this.moodRepo.preload({
      id: +id,
      ...updateMovieDto,
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} is not found`);
    }

    return this.moodRepo.save(movie);
  }

  async remove(id: string): Promise<Mood> {
    const movie = await this.moodRepo.findOneBy({ id: +id });
    return this.moodRepo.remove(movie);
  }
}
