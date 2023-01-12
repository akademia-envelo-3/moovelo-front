import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventFormProvider } from '../../event-form-provider';

@Component({
  selector: 'app-event-type-form',
  templateUrl: './event-type-form.component.html',
  styleUrls: ['./event-type-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTypeFormComponent {
  private eventFormProvider = inject(EventFormProvider);

  constructor() {
    this.eventTypeForm = this.eventFormProvider.getForm().get('eventTypeForm') as FormGroup;
  }

  eventTypeForm: FormGroup;
}
