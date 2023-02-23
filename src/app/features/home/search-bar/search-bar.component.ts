import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { useDestroyToken } from '@shared/injection-hooks/useDestroyToken';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { debounceTime, takeUntil } from 'rxjs';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {
  private searchBarService = inject(SearchBarService);
  private unsubscribe$$ = useDestroyToken();
  private errorService = inject(ErrorhandlerService);

  errorClientServer$ = this.errorService.error$;

  searchResult$ = this.searchBarService.searchResult$;

  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.searchControl.valueChanges.pipe(takeUntil(this.unsubscribe$$), debounceTime(1000)).subscribe(value => {
      return this.searchBarService.search(value);
    });
  }
}
