import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITalent } from 'interfaces';
import { toFormData } from '../../../shared/utils/to-form-data';

@Injectable({
  providedIn: 'root',
})
export class TalentsApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ITalent[]>(`/api/talents`);
  }

  getOne(id: string) {
    return this.http.get<ITalent>(`/api/talents/${id}`);
  }

  create(talent: any) {
    return this.http.post<ITalent>(`/api/talents`, talent);
  }

  uploadPoster(poster: { [key: string]: File }, id: number) {
    return this.http.post(`/api/talents/${id}/poster`, toFormData(poster), {
      reportProgress: true,
      observe: 'events',
    });
  }

  update(id: string, talent: any) {
    return this.http.patch<ITalent>(`/api/talents`, talent);
  }

  delete(id: string) {
    return this.http.delete<void>(`/api/talents/${id}`);
  }
}
