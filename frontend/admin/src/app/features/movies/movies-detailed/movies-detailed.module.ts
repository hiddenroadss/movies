import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDetailedComponent } from './movies-detailed.component';

@NgModule({
  declarations: [MoviesDetailedComponent],
  imports: [CommonModule],
  exports: [MoviesDetailedComponent],
})
export class MoviesDetailedModule {}
