import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SingleEventService } from './single-event.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './singleEvent.component.html',
  styleUrls: ['./singleEvent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEventComponent {
  private singleEventService = inject(SingleEventService);
}
