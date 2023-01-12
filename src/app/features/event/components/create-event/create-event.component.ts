import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { EventFormProvider } from '../../event-form-provider';

interface EventForm {
  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
}

interface EventTypeForm {
  isConfirmationRequired: FormControl<boolean>;
  limitedPlaces: FormControl<number>;
  isPrivate: FormControl<boolean>;
}

interface EventDetailsForm {
  group: FormControl<null | number>;
  name: FormControl<string>;
  category: FormControl<string[]>;
  startDate: FormControl<string>;
  hour: FormControl<string>;
  postCode: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
  streetNumber: FormControl<string>;
  apartmentNumber: FormControl<string>;
  description: FormControl<string>;
  hashtags: FormControl<string[]>;
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: EventFormProvider, useExisting: CreateEventComponent }],
})
export class CreateEventComponent extends EventFormProvider {
  private builder = inject(NonNullableFormBuilder);
  private eventForm = this.createForm();

  getForm() {
    return this.eventForm;
  }

  private createForm() {
    return this.builder.group<EventForm>({
      eventTypeForm: this.builder.group({
        isConfirmationRequired: this.builder.control(false),
        limitedPlaces: this.builder.control(0),
        isPrivate: this.builder.control(false),
      }),
      eventDetailsForm: this.builder.group({
        group: this.builder.control<number | null>(null),
        name: this.builder.control(''),
        category: this.builder.control<string[]>([]),
        startDate: this.builder.control(''),
        hour: this.builder.control(''),
        postCode: this.builder.control(''),
        city: this.builder.control(''),
        street: this.builder.control(''),
        streetNumber: this.builder.control(''),
        apartmentNumber: this.builder.control(''),
        description: this.builder.control(''),
        hashtags: this.builder.control<string[]>([]),
      }),
    });
  }
}
