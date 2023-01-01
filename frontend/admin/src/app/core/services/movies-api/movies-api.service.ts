import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from 'interfaces';
import { toFormData } from '../../../shared/utils/to-form-data';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IMovie[]>(`/api/movies`);
  }

  getOne(id: string) {
    return this.http.get<IMovie>(`/api/movies/${id}`);
  }

  create(movie: any) {
    return this.http.post<IMovie>(`/api/movies`, movie);
  }

  uploadPoster(poster: { [key: string]: File }, id: number) {
    return this.http.post(`/api/movies/${id}/poster`, toFormData(poster), {
      reportProgress: true,
      observe: 'events',
    });
  }

  getPoster(id: number) {
    return this.http.get(`/api/movies/${id}/poster`);
  }

  update(id: string, movie: any) {
    return this.http.patch<IMovie>(`/api/movies`, movie);
  }

  delete(id: string) {
    return this.http.delete<void>(`/api/movies/${id}`);
  }
}
