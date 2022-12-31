import { Component, OnInit } from '@angular/core';
import { TalentsService } from 'backend/talents/talents.service';
import { ITalent } from 'interfaces';
import { Observable } from 'rxjs';
import { TalentsApiService } from '../../core/services/talents-api/talents-api.service';

@Component({
  selector: 'mv-talents',
  templateUrl: './talents.component.html',
  styles: [],
})
export class TalentsComponent implements OnInit {
  talents$: Observable<ITalent[]>;

  constructor(private talentsService: TalentsApiService) {}

  ngOnInit(): void {
    this.talents$ = this.talentsService.getAll();
  }
}
