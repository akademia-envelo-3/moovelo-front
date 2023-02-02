import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { Store } from '@ngrx/store';
import { SingleEventStateInterface } from './single-event.interface';
import { SingleEventActions } from './store/single-event.actions';

@Injectable({
  providedIn: 'root',
})
export class SingleEventService {
  private API_URL = inject(API_URL);
  private store = inject<Store<SingleEventStateInterface>>(Store);
  private http = inject(HttpClient);

  getSingleEvent(eventId: string) {
    this.http.get<SingleEventStateInterface>(this.API_URL + `/singleEvents/${eventId}`).subscribe(singleEvent => {
      this.store.dispatch(SingleEventActions.fetch_single_event(singleEvent));
    });
  }
}
