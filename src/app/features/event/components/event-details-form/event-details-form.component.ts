import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventFormProvider } from '../../event-form-provider';

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsFormComponent {
  private eventFormProvider = inject(EventFormProvider);
}
