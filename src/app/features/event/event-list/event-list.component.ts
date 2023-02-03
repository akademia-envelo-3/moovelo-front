import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: `./event-list.component.html`,
  styleUrls: ['./event-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  private eventListService = inject(EventListService);
  private errorService = inject(ErrorhandlerService);

  errorClientServer$ = this.errorService.error$;

  eventList$ = this.eventListService.getAllEvents();
}
