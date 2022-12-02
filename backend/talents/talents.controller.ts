import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { Public } from 'backend/common/decorators/public.decorator';
import { PaginationQueryDto } from 'backend/common/dto/pagination-query.dto';
import { CreateTalentDto } from './dtos/create-talent.dto';
import { UpdateTalentDto } from './dtos/update-talent.dto';
import { TalentsService } from './talents.service';

@Public()
@Controller('talents')
export class TalentsController {
  constructor(private talentsService: TalentsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.talentsService.findAll(paginationQuery);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.talentsService.findOne(+id);
  }

  @Post()
  create(@Body() createMovieDto: CreateTalentDto) {
    return this.talentsService.create(createMovieDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateTalentDto) {
    return this.talentsService.update(id, updateMovieDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.talentsService.remove(id);
  }
}
