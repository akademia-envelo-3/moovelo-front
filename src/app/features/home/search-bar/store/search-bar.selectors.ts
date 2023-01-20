import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.module';

const selectSearchResult = (state: AppState) => state.searchBar;

export const selectEvents = createSelector(selectSearchResult, state => state?.events);
export const selectGroups = createSelector(selectSearchResult, state => state?.groups);
