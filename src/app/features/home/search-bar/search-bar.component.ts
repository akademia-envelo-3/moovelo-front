import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectEvents, selectGroups } from './store/search-bar.selectors';
import { AppState } from 'src/app/app.module';
import { SearchBarApiActions } from './store/search-bar.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private store = inject<Store<AppState>>(Store);
  events = this.store.select(selectEvents);
  groups = this.store.select(selectGroups);
  private unsubscribe$$ = new Subject<void>();

  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.searchControl.valueChanges.pipe(takeUntil(this.unsubscribe$$), debounceTime(1000)).subscribe(value => {
      return this.store.dispatch(SearchBarApiActions.fetch_search_results({ value: value }));
    });
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
