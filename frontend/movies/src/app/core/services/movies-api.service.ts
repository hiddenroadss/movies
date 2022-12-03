import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:3000/movies');
  }

  getOne(id: string) {
    return this.http.get(`http://localhost:3000/movies/${id}`);
  }
}
