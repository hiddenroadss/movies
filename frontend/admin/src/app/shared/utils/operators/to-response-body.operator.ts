import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';

export function toResponseBody<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body),
  );
}
