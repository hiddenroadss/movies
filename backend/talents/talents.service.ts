import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'backend/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateTalentDto } from './dtos/create-talent.dto';
import { UpdateTalentDto } from './dtos/update-talent.dto';
import { Talent } from './entities/talent.entity';

@Injectable()
export class TalentsService {
  constructor(
    @InjectRepository(Talent) private talentRepo: Repository<Talent>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto): Promise<Talent[]> {
    const { limit, offset } = paginationQuery;
    return this.talentRepo.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Talent> {
    const movie = await this.talentRepo.findOne({
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

  async create(createMovieDto: CreateTalentDto): Promise<Talent> {
    const movie = this.talentRepo.create({
      ...createMovieDto,
    });
    return this.talentRepo.save(movie);
  }

  async update(id: string, updateMovieDto: UpdateTalentDto): Promise<Talent> {
    // const moods =
    //   updateMovieDto.moods &&
    //   (await Promise.all(
    //     updateMovieDto.moods.map((mood) => this.preloadMoodByName(mood.name)),
    //   ));
    const movie = await this.talentRepo.preload({
      id: +id,
      ...updateMovieDto,
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} is not found`);
    }

    return this.talentRepo.save(movie);
  }

  async remove(id: string): Promise<Talent> {
    const movie = await this.talentRepo.findOneBy({ id: +id });
    return this.talentRepo.remove(movie);
  }
}
