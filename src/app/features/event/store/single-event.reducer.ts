import { createReducer, on } from '@ngrx/store';
import { SingleEventStateInterface } from '../single-event.interface';
import { SingleEventActions } from './single-event.actions';
import { initialSingleEventState } from './single-event.state';

export const singleEventReducer = createReducer(
  initialSingleEventState,
  on(
    SingleEventActions.fetch_single_event,
    (state, { eventId }): SingleEventStateInterface => ({
      ...state,
      eventId: eventId,
    })
  )
);
