import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { SortOption, SortValue } from '../event.interfaces';
import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  private eventListService = inject(EventListService);
  private errorService = inject(ErrorhandlerService);

  private sortValue: SortValue = 'sortOrder=desc';

  errorClientServer$ = this.errorService.error$;
  events$ = this.eventListService.events$;

  sortOptions: SortOption[] = [
    { name: 'Data: najnowsze', value: 'sortOrder=desc' },
    { name: 'Data: najstarsze', value: 'sortOrder=asc' },
    { name: 'Liczba uczestników: od najwyższej', value: 'participants=desc' },
    { name: 'Liczba uczestników: od najniższej', value: 'participants=asc' },
  ];

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventListService.getAllEvents(this.sortValue);
  }

  sort(value: SortValue) {
    this.sortValue = value;
    this.getEvents();
  }
}
