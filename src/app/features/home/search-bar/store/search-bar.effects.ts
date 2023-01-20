import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchBarActions, SearchBarApiActions } from './search-bar.actions';
import { map, switchMap } from 'rxjs';
import { SearchBarService } from '../search-bar.service';

@Injectable()
export class SearchBarEffects {
  private actions$ = inject(Actions);
  private searchbarService = inject(SearchBarService);

  fetchSearchResultsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchBarApiActions.fetch_search_results),
      switchMap(({ value }) => {
        return this.searchbarService.search(value);
      }),
      map(value => {
        return SearchBarActions.upadate_search_results(value);
      })
    )
  );
}
