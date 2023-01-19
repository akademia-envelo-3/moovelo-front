import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SingleEventService } from './single-event.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';

@Component({
  selector: 'app-single-event',
  templateUrl: './singleEvent.component.html',
  styleUrls: ['./singleEvent.component.scss'],
  providers: [SingleEventService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEventComponent {
  private singleEventService = inject(SingleEventService);
  private store = inject<Store<AppState>>(Store);
  private eventId = '1';
  eventInfo$ = this.store.select(store => store.singleEvent.eventInfo);

  ngOnInit() {
    this.singleEventService.getSingleEvent(this.eventId);
  }
}
