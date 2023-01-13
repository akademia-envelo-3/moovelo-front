import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventFormProvider } from '../../event-form-provider';
import { EventTypeForm, EventDetailsForm } from '../create-event/create-event.component';

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsFormComponent {
  private eventFormProvider = inject(EventFormProvider);

  constructor() {
    this.eventTypeForm = this.eventFormProvider.getForm().get('eventTypeForm') as FormGroup<EventTypeForm>;
    this.eventDetailsForm = this.eventFormProvider.getForm().get('eventDetailsForm') as FormGroup<EventDetailsForm>;
    this.eventDetailsForm.valueChanges.subscribe(r => {
      console.log(this.nameCtrl.errors);
    });
  }

  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;

  get title() {
    const value = this.eventTypeForm.value;
    return `${value.isPrivate ? 'prywatne' : value.isGroup ? 'grupowe' : value.isInternal ? 'firmowe' : 'zewnętrzne'}`;
  }

  get isConfirmationRequiredCtrl() {
    return this.eventDetailsForm.controls.isConfirmationRequired;
  }

  get nameCtrl() {
    return this.eventDetailsForm.controls.name;
  }

  get isLimitedPlacesCtrl() {
    return this.eventDetailsForm.controls.isLimitedPlaces;
  }

  get limitedPlacesCtrl() {
    return this.eventDetailsForm.controls.limitedPlaces;
  }
}
