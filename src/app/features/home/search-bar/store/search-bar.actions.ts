import { createActionGroup, props } from '@ngrx/store';
import { SearchResult } from '../search-bar.interface';

export const SearchBarActions = createActionGroup({
  source: 'SearchBar',
  events: {
    upadate_search_results: props<SearchResult>(),
  },
});

export const SearchBarApiActions = createActionGroup({
  source: 'SearchBar',
  events: {
    fetch_search_results: props<{ value: string }>(),
  },
});
