import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventService } from './create-event.service';

@Injectable()
export class DetailsGuard implements CanActivate {
  private eventTypeForm1 = inject(CreateEventService);
  private eventTypeForm = inject(CreateEventService).getForm().controls.eventTypeForm;
  private isInternal = this.eventTypeForm.controls.isInternal.value;
  private isPrivate = this.eventTypeForm.controls.isPrivate.value;
  private isGroup = this.eventTypeForm.controls.isGroup.value;

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.eventTypeForm1);
    console.log([this.isGroup, this.isPrivate, this.isInternal]);
    console.log([this.isGroup, this.isPrivate, this.isInternal].filter(a => a).length);
    return true;
  }
}
