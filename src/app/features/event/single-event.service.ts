import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SingleEventStateInterface } from './single-event.interface';
import { SingleEventActions } from './store/single-event.actions';

@Injectable({
  providedIn: 'root',
})
export class SingleEventService {
  private store = inject<Store<SingleEventStateInterface>>(Store);
  private http = inject(HttpClient);
  getSingleEvent(eventId: string) {
    this.http.get<SingleEventStateInterface>(`http://localhost:3000/events/1`).subscribe(singleEvent => {
      console.log(singleEvent);
      this.store.dispatch(SingleEventActions.fetch_single_event(singleEvent));
    });
  }
}
