import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SingleEventService } from './single-event.service';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { useStore } from '@shared/inject-hooks/user-store';
import { EventCommentService } from '../event-comment/event-comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-event',
  templateUrl: './singleEvent.component.html',
  styleUrls: ['./singleEvent.component.scss'],
  providers: [SingleEventService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEventComponent {
  private singleEventService = inject(SingleEventService);
  private eventCommentService = inject(EventCommentService);
  private store = useStore();
  private errorService = inject(ErrorhandlerService);
  private route = inject(ActivatedRoute);

  errorClientServer$ = this.errorService.error$;
  singleEvent$ = this.store.select(store => store.singleEvent);
  eventMenu$ = this.singleEventService.getEventMenu();
  comments$ = this.eventCommentService.getCommentsByEventId(this.route.snapshot.params['id']);
}
