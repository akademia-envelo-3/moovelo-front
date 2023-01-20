import { createReducer, on } from '@ngrx/store';
import { SearchBarActions } from './search-bar.actions';
import { initialSearchBarState } from './search-bar.state';

export const searchBarReducer = createReducer(
  initialSearchBarState,
  on(SearchBarActions.upadate_search_results, (state, { events, groups }) => {
    return {
      ...state,
      events: events,
      groups: groups,
    };
  })
);
