import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { Subject, takeUntil } from 'rxjs';
import { FilterValue, SortValue } from '../event.interfaces';
import { EventListService } from './event-list.service';
import { filterOptions, sortOptions } from './filterSortOptions';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  private builder = inject(NonNullableFormBuilder);
  private eventListService = inject(EventListService);
  private errorService = inject(ErrorhandlerService);

  private unsubscribe$$ = new Subject<void>();

  private sortValue: SortValue = 'sortOrder=desc';
  private filterValue: FilterValue[] = [];
  private categoryValue: string | null = null;

  sortOptions = sortOptions;
  filterOptions = filterOptions;
  formArray = this.builder.array<FormControl<boolean>>([]);
  errorClientServer$ = this.errorService.error$;
  events$ = this.eventListService.events$;
  categories$ = this.eventListService.getCategories();

  isHidden = true;
  hasFilterChanged = false;

  ngOnInit() {
    this.getEvents();
    filterOptions.forEach(() => this.formArray.push(this.builder.control(false)));

    this.formArray.valueChanges.pipe(takeUntil(this.unsubscribe$$)).subscribe(() => (this.hasFilterChanged = true));
  }

  getEvents() {
    this.eventListService.getAllEvents(this.sortValue, this.filterValue, this.categoryValue);
    this.isHidden = true;
    this.hasFilterChanged = false;
  }

  sort(value: SortValue) {
    this.sortValue = value;
    this.getEvents();
  }

  addfilter(value: FilterValue) {
    if (this.filterValue.join() === value) return;

    if (this.filterValue.includes(value)) {
      this.filterValue = this.filterValue.filter(filter => filter !== value);
    } else {
      this.filterValue.push(value);
    }
  }

  filter() {
    if (!this.hasFilterChanged) return;
    this.getEvents();
  }

  resetFilter() {
    if (this.filterValue.length) {
      this.filterValue = [];
      this.formArray.reset();
      this.getEvents();
    }
  }

  resetCategory() {
    if (this.categoryValue) {
      this.categoryValue = null;
      this.getEvents();
    }
  }

  chooseCategory(category: string) {
    this.categoryValue = category;
    this.getEvents();
  }

  toggleTab() {
    this.isHidden = !this.isHidden;
  }

  openTab() {
    this.isHidden = false;
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
