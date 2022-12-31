import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsCreateComponent } from './talents-create/talents-create.component';
import { TalentsComponent } from './talents.component';

const routes: Routes = [
  {
    path: '',
    component: TalentsComponent,
  },
  {
    path: 'create',
    component: TalentsCreateComponent,
  },
  // {
  //   path: 'update',
  //   component: MoviesDetailedComponent,
  // },
  // {
  //   path: 'edit/:id',
  //   component: MoviesDetailedComponent,
  // },
  // {
  //   path: 'copy/:id',
  //   component: MoviesDetailedComponent,
  // },
  // {
  //   path: 'readonly/:id',
  //   component: MoviesDetailedComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalentsRoutingModule {}
