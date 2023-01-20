import { createReducer } from '@ngrx/store';
import { initialSearchBarState } from './search-bar.state';

export const searchBarReducer = createReducer(initialSearchBarState);
