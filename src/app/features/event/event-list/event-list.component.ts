import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [EventListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  private eventListService = inject(EventListService);

  eventList$ = this.eventListService.getAllEvents();
}
