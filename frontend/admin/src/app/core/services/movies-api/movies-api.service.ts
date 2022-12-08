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
    return this.http.post<IMovie>(`/api/movies`, toFormData(movie), {
      reportProgress: true,
      observe: 'events',
    });
  }

  update(id: string, movie: any) {
    return this.http.patch<IMovie>(`/api/movies`, movie);
  }

  delete(id: string) {
    return this.http.delete<void>(`/api/movies/${id}`);
  }
}
