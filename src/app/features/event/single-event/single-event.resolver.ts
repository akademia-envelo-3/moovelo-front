import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SingleEventService } from './single-event.service';

export const singleEventResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
  const singleEventService = inject(SingleEventService);
  return singleEventService.getSingleEvent(route.params['id']);
};
