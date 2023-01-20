import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchBarService } from './search-bar.service';
import { switchMap, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchBarService],
})
export class SearchBarComponent {
  private searchBarService = inject(SearchBarService);

  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(2000),
      switchMap(value => {
        return this.searchBarService.search(value);
      })
    );
  }
}
