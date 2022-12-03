import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from '../../../shared/enums/operation.enum';
import { RoutingParams } from '../../../shared/interfaces/routing-params.interface';
import { RoutingUtils } from '../../../shared/utils/routing.utils';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'mv-movies-detailed',
  templateUrl: './movies-detailed.component.html',
  styles: [],
})
export class MoviesDetailedComponent implements OnInit {
  operation: Operation;
  params: RoutingParams;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    this.operation = RoutingUtils.getOperation(this.router);
    this.loadInitialData();
  }

  loadInitialData() {
    this.params = RoutingUtils.getConfigParams(this.route);

    this.moviesService.loadInitialData(this.params).subscribe();
  }
}
