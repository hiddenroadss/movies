import { Injectable } from '@angular/core';
import { TalentsApiService } from '../../core/services/talents-api/talents-api.service';
import { RoutingParams } from '../../shared/interfaces/routing-params.interface';

@Injectable({
  providedIn: 'root',
})
export class TalentsService {
  constructor(private talentsApi: TalentsApiService) {}

  loadInitialData(params: RoutingParams) {
    return this.talentsApi.getOne(params.id);
  }
}
