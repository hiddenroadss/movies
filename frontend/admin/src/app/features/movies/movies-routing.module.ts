import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { MoviesDetailedComponent } from './movies-detailed/movies-detailed.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'create',
    component: MoviesCreateComponent,
  },
  {
    path: 'update',
    component: MoviesDetailedComponent,
  },
  {
    path: 'edit/:id',
    component: MoviesDetailedComponent,
  },
  {
    path: 'copy/:id',
    component: MoviesDetailedComponent,
  },
  {
    path: 'readonly/:id',
    component: MoviesDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
