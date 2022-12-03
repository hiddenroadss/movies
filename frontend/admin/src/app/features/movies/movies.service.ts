import { Injectable } from '@angular/core';
import { MoviesApiService } from '../../core/services/movies-api/movies-api.service';
import { RoutingParams } from '../../shared/interfaces/routing-params.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private moviesApi: MoviesApiService) {}

  loadInitialData(params: RoutingParams) {
    return this.moviesApi.getOne(params.id);
  }
}
