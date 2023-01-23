import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styles: [],
  providers: [EventListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  private eventListService = inject(EventListService);

  error = this.eventListService.errors$;
  eventList = this.eventListService.getAllEvents();
}
