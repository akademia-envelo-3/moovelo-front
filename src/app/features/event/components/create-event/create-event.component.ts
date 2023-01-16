import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import patterns from '@shared/regex-patterns';
import { EventFormProvider } from '../../event-form-provider';

export interface EventForm {
  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
}

export interface EventTypeForm {
  isInternal: FormControl<boolean>;
  isPrivate: FormControl<boolean>;
  isGroup: FormControl<boolean>;
}

export interface EventDetailsForm {
  group: FormControl<null | number>;
  isConfirmationRequired: FormControl<boolean>;
  limitedPlaces: FormControl<number>;
  isLimitedPlaces: FormControl<boolean>;
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

export const isHourInThePastValidator: ValidatorFn = (control: AbstractControl) => {
  const today = new Date();
  const startDateRaw = control.get('startDate')?.value as string | undefined;
  const hour = control.get('hour')?.value as string | undefined;
  if (startDateRaw && hour) {
    const startDate = new Date(startDateRaw);
    if (startDate.toDateString() === today.toDateString()) {
      const hourSplitted = hour.split(':');
      return today.getHours() < +hourSplitted[0] ||
        (today.getHours() === +hourSplitted[0] && today.getMinutes() < +hourSplitted[1])
        ? null
        : { isHourInThePast: true };
    }
  }
  return null;
};

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
        isInternal: this.builder.control(false),
        isPrivate: this.builder.control(false),
        isGroup: this.builder.control(false),
      }),
      eventDetailsForm: this.builder.group(
        {
          group: this.builder.control<number | null>(null),
          limitedPlaces: this.builder.control(0, {
            validators: [Validators.required, Validators.min(1)],
          }),
          isLimitedPlaces: this.builder.control(false),
          isConfirmationRequired: this.builder.control(false),
          name: this.builder.control('', {
            validators: [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
          }),
          category: this.builder.control<string[]>([]),
          startDate: this.builder.control('', {
            validators: [Validators.required],
          }),
          hour: this.builder.control('', {
            validators: [Validators.required],
          }),
          postCode: this.builder.control('', {
            validators: [Validators.required, Validators.pattern(patterns.postCode)],
          }),
          city: this.builder.control('', {
            validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
          }),
          street: this.builder.control('', {
            validators: [Validators.required, Validators.minLength(3), Validators.maxLength(60)],
          }),
          streetNumber: this.builder.control('', {
            validators: [Validators.required, Validators.maxLength(10)],
          }),
          apartmentNumber: this.builder.control('', {
            validators: [Validators.maxLength(5)],
          }),
          description: this.builder.control('', {
            validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4000)],
          }),
          hashtags: this.builder.control<string[]>([]),
        },
        { validators: isHourInThePastValidator }
      ),
    });
  }
}
