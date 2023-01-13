import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { SingleEventStateInterface } from './single-event.interface';
@Injectable({
  providedIn: 'root',
})
export class SingleEventService {
  private store = inject<Store<AppState>>(Store);
  private http = inject(HttpClient);
  // constructor() {}

  getSingleEvent(eventId: string) {
    combineLatest([this.http.get<SingleEventStateInterface>(`http://localhost:3000/events/${eventId}`)]);
  }
}
