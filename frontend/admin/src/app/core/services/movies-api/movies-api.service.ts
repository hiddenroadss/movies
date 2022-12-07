import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from 'interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IMovie[]>(`/movies`);
  }

  getOne(id: string) {
    return this.http.get<IMovie>(`/movies/${id}`);
  }

  create(movie: any) {
    return this.http.post<IMovie>(`/movies`, movie);
  }

  update(id: string, movie: any) {
    return this.http.patch<IMovie>(`/movies`, movie);
  }

  delete(id: string) {
    return this.http.delete<void>(`/movies/${id}`);
  }
}
