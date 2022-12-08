import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../core/services/movies-api/movies-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mv-movies',
  templateUrl: './movies.component.html',
  styles: [],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private moviesService: MoviesApiService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getAll();
  }
}
