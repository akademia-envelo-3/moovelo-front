import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchBarService } from './search-bar.service';
import { switchMap, debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectEvents } from './store/search-bar.selectors';
import { AppState } from 'src/app/app.module';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchBarService],
})
export class SearchBarComponent {
  private searchBarService = inject(SearchBarService);
  private store = inject<Store<AppState>>(Store);

  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.store.select(selectEvents).subscribe(a => {
      console.log(a);
    });
    this.searchControl.valueChanges.pipe(
      debounceTime(2000),
      switchMap(value => {
        return this.searchBarService.search(value);
      })
    );
  }
}
