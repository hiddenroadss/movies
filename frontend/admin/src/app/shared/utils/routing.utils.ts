import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from '../enums/operation.enum';
import { RoutingParams } from '../interfaces/routing-params.interface';

export class RoutingUtils {
  public static getOperation(router: Router): Operation {
    if (/\/readonly/.test(router.url)) {
      return Operation.ReadOnly;
    }

    if (/\/create/.test(router.url)) {
      return Operation.Create;
    }

    if (/\/copy/.test(router.url)) {
      return Operation.Copy;
    }

    if (/\/edit/.test(router.url)) {
      return Operation.Edit;
    }

    return null;
  }

  public static getConfigParams(route: ActivatedRoute): RoutingParams {
    const params: RoutingParams = {
      id: route.snapshot.params.id,
    };

    return params;
  }
}
