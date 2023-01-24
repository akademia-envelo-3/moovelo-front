import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private searchBarService = inject(SearchBarService);
  private unsubscribe$$ = new Subject<void>();

  searchResult$ = this.searchBarService.searchResult$;

  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.searchControl.valueChanges.pipe(takeUntil(this.unsubscribe$$), debounceTime(1000)).subscribe(value => {
      return this.searchBarService.search(value);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
