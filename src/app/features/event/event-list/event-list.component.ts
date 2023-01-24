import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  private router = inject(Router);

  eventList$ = this.eventListService.getAllEvents();

  createNewEvent() {
    this.router.navigateByUrl('/create-event');
  }
}
