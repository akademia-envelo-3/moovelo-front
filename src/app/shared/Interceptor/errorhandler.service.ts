import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorhandlerService {
  public error = new BehaviorSubject(false);
  errorShows() {
    this.error.next(true);
  }
}
