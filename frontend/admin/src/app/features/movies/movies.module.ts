import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesDetailedModule } from './movies-detailed/movies-detailed.module';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';

@NgModule({
  declarations: [MoviesComponent, MoviesCreateComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MoviesDetailedModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
})
export class MoviesModule {}
