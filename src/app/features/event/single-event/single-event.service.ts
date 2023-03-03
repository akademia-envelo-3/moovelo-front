import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/env.token';
import { useStore } from '@shared/inject-hooks/user-store';
import { combineLatest, map } from 'rxjs';
import { selectUserId, selectUserType } from '../../auth/store/user.selectors';
import { options } from './options';
import { SingleEventStateInterface } from './single-event.interface';
import { SingleEventActions } from './store/single-event.actions';
import { selectEventOwnerId } from './store/single-event.selectors';

@Injectable({
  providedIn: 'root',
})
export class SingleEventService {
  private API_URL = inject(API_URL);
  private store = useStore();
  private http = inject(HttpClient);

  getSingleEvent(eventId: string) {
    this.http.get<SingleEventStateInterface>(this.API_URL + `/singleEvents/${eventId}`).subscribe(singleEvent => {
      this.store.dispatch(SingleEventActions.fetch_single_event(singleEvent));
    });
  }

  getEventMenu() {
    return combineLatest([
      this.store.select(selectEventOwnerId),
      this.store.select(selectUserType),
      this.store.select(selectUserId),
    ]).pipe(
      map(([eventOwnerId, userType, userId]) => {
        if (userId === eventOwnerId) {
          return options.eventOwner;
        } else {
          return options[userType];
        }
      })
    );
  }
}
