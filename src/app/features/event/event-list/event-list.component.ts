import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { FilterValue, SortValue } from '../event.interfaces';
import { GetEventPayload } from './event-list.interface';
import { EventListService } from './event-list.service';
import { filterOptions, sortOptions } from './filterSortOptions';
import { EventListActions } from './store/event-list.actions';
import { selectEventList } from './store/event-list.selectors';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  private store = inject<Store<AppState>>(Store);
  private builder = inject(NonNullableFormBuilder);
  private eventListService = inject(EventListService);
  private errorService = inject(ErrorhandlerService);

  private unsubscribe$$ = new Subject<void>();

  getEventPayload: GetEventPayload = {
    sort: 'sortOrder=desc',
    filter: [],
    category: null,
  };

  sortOptions = sortOptions;
  filterOptions = filterOptions;

  formArray = this.builder.array<FormControl<boolean>>([]);

  eventListState$ = this.store.select(selectEventList);
  errorClientServer$ = this.errorService.error$;
  categories$ = this.eventListService.getCategories();

  hasFilterChanged = false;

  ngOnInit() {
    this.store.dispatch(EventListActions.getEvents(this.getEventPayload));

    filterOptions.forEach(() => this.formArray.push(this.builder.control(false)));

    this.formArray.valueChanges.pipe(takeUntil(this.unsubscribe$$)).subscribe(() => (this.hasFilterChanged = true));
  }

  sort(value: SortValue) {
    this.getEventPayload.sort = value;
    this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
  }

  addfilter(value: FilterValue) {
    if (this.getEventPayload.filter.join() === value) return;

    if (this.getEventPayload.filter.includes(value)) {
      this.getEventPayload.filter = this.getEventPayload.filter.filter(filter => filter !== value);
    } else {
      this.getEventPayload.filter = [...this.getEventPayload.filter, value];
    }
  }

  filter() {
    if (!this.hasFilterChanged) return;
    this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
  }

  resetFilter() {
    if (this.getEventPayload.filter.length) {
      this.getEventPayload.filter = [];
      this.formArray.reset();
      this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
    }
  }

  resetCategory() {
    if (this.getEventPayload.category) {
      this.getEventPayload.category = null;
      this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
    }
  }

  chooseCategory(category: string) {
    this.getEventPayload.category = category;
    this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
  }

  toggleTab() {
    this.store.dispatch(EventListActions.toggleFilters());
  }

  openTab() {
    this.store.dispatch(EventListActions.showFilters());
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
