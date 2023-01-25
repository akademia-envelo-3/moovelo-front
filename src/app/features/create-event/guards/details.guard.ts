import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventFormService } from '../create-event-form.service';

export const detailsGuard = (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const eventTypeForm = inject(CreateEventFormService).getForm().controls.eventTypeForm;
  const router = inject(Router);

  const isInternal = eventTypeForm.controls.isInternal.value;
  const isPrivate = eventTypeForm.controls.isPrivate.value;
  const isGroup = eventTypeForm.controls.isGroup.value;
  const isExternal = eventTypeForm.controls.isExternal.value;

  if (!([isGroup, isPrivate, isInternal, isExternal].filter(a => a).length === 1)) {
    return router.navigate(['/create-event']);
  } else {
    return true;
  }
};
