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
import { CreateMoodDto } from './dtos/create-mood.dto';
import { UpdateMoodDto } from './dtos/update-mood.dto';
import { MoodsService } from './moods.service';

@Public()
@Controller('moods')
export class MoodsController {
  constructor(private moodsService: MoodsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.moodsService.findAll(paginationQuery);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.moodsService.findOne(+id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMoodDto) {
    console.log(createMovieDto);
    return this.moodsService.create(createMovieDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMoodDto) {
    return this.moodsService.update(id, updateMovieDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moodsService.remove(id);
  }
}
