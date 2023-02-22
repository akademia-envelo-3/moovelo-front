import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { EventListService } from '../event-list.service';
import { EventListActions, EventListApiActions } from './event-list.actions';

@Injectable()
export class EventListEffects {
  private actions$ = inject(Actions);
  private eventListService = inject(EventListService);

  getEventsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventListActions.getEvents),
      switchMap(getEventPayload => {
        return this.eventListService.getAllEvents(getEventPayload).pipe(
          map(events => {
            return EventListApiActions.getEventsSuccess({ events: events });
          })
        );
      })
    )
  );
}
