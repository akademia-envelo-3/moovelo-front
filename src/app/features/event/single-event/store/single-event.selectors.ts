import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { SingleEventStateInterface } from '../single-event.interface';

export const selectSingleEvent = (state: AppState) => state.singleEvent;

export const selectEventOwnerId = createSelector(
  selectSingleEvent,
  (state: SingleEventStateInterface) => state.eventOwner.userId
);
