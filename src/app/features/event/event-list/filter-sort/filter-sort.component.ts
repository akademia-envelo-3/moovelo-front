import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/app.module';
import { Category } from '../../single-event/single-event.interface';
import { FilterValue, GetEventPayload, SortValue } from '../event-list.interface';
import { EventListActions } from '../store/event-list.actions';
import { selectEventList } from '../store/event-list.selectors';
import { filterOptions, sortOptions } from './../filterSortOptions';

@Component({
  selector: 'app-filter-sort[isFiltersHidden][categories]',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSortComponent {
  @Input() isFiltersHidden!: boolean;
  @Input() categories!: Category[];

  private store = inject<Store<AppState>>(Store);
  private builder = inject(NonNullableFormBuilder);

  private unsubscribe$$ = new Subject<void>();

  eventListState$ = this.store.select(selectEventList);

  sortOptions = sortOptions;
  filterOptions = filterOptions;

  formArray = this.builder.array<FormControl<boolean>>([]);

  getEventPayload: GetEventPayload = {
    sort: 'sortOrder=desc',
    filter: [],
    category: null,
  };

  hasFilterChanged = false;

  ngOnInit() {
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

  chooseCategory(category: string) {
    this.getEventPayload.category = category;
    this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
  }

  resetCategory() {
    if (this.getEventPayload.category) {
      this.getEventPayload.category = null;
      this.store.dispatch(EventListActions.getEvents(this.getEventPayload));
    }
  }

  openTab() {
    this.store.dispatch(EventListActions.showFilters());
  }

  toggleTab() {
    this.store.dispatch(EventListActions.toggleFilters());
  }
}
