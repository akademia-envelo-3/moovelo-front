import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SingleGroupService } from './single-group.service';

export const singleGroupResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
  const singleGroupService = inject(SingleGroupService);
  return singleGroupService.getGroupInfo(route.params['id']);
};
