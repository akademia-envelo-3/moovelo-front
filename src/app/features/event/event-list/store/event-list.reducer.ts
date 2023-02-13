import { createReducer, on } from '@ngrx/store';
import { EventListActions, EventListApiActions } from './event-list.actions';
import { initialEventListState } from './event-list.state';

export const eventListReducer = createReducer(
  initialEventListState,
  on(EventListActions.showFilters, state => ({
    ...state,
    isFiltersHidden: false,
  })),
  on(EventListActions.toggleFilters, state => ({
    ...state,
    isFiltersHidden: !state.isFiltersHidden,
  })),
  on(EventListApiActions.getEventsSuccess, (state, { events }) => ({
    ...state,
    isFiltersHidden: true,
    events,
  }))
);
