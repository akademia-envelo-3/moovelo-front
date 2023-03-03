import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SingleEventService } from './single-event.service';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { useStore } from '@shared/inject-hooks/user-store';

@Component({
  selector: 'app-single-event',
  templateUrl: './singleEvent.component.html',
  styleUrls: ['./singleEvent.component.scss'],
  providers: [SingleEventService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEventComponent {
  private singleEventService = inject(SingleEventService);
  private store = useStore();
  private errorService = inject(ErrorhandlerService);

  errorClientServer$ = this.errorService.error$;
  singleEvent$ = this.store.select(store => store.singleEvent);
  eventMenu$ = this.singleEventService.getEventMenu();
}
