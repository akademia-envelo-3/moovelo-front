import { createReducer, on } from '@ngrx/store';
import { SingleEventActions } from './single-event.actions';
import { initialSingleEventState } from './single-event.state';

export const singleEventReducer = createReducer(
  initialSingleEventState,
  on(SingleEventActions.fetch_single_event, (state, singleEvent) => ({
    ...state,
    eventOwner: singleEvent.eventOwner,
    eventInfo: singleEvent.eventInfo,
    id: singleEvent.id,
  }))
);
