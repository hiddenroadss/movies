import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
  Res,
  ParseFilePipe,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
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

  @Post('/:id/poster')
  @UseInterceptors(FilesInterceptor('poster'))
  uploadPoster(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [],
      }),
    )
    file: Express.Multer.File,
  ) {}

  @Get('/:id/poster')
  findUploadedFile(@Param('id') id: string, @Res() res) {
    res.sendFile(`${id}_poster.png`, { root: 'uploads/movies' });
  }
}
