import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`http://localhost:3000/movies`);
  }

  getOne(id: string) {
    return this.http.get(`http://localhost:3000/movies/${id}`);
  }

  create(movie: any) {
    return this.http.post(`http://localhost:3000/movies`, movie);
  }

  update(id: string, movie: any) {
    return this.http.patch(`http://localhost:3000/movies`, movie);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/movies/${id}`);
  }
}
