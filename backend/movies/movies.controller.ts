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
import { access } from 'fs/promises';

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
    @Param('id') id: string,
  ) {
    return this.moviesService.update(id, {
      poster: `movies/${id}/poster`,
    });
  }

  @Get('/:id/poster')
  async findUploadedFile(@Param('id') id: string, @Res() res) {
    try {
      await access(`/uploads/movies/${id}_poster.png`);
      res.sendFile(`${id}_poster.png`, { root: 'uploads/movies' });
    } catch (err) {
      res.sendFile(`default_poster.jpg`, { root: 'uploads/movies' });
    }
  }
}
