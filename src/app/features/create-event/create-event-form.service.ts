import { inject, Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { pattern } from '@shared/patterns/patterns';
import { EventForm } from './create-event.interface';
import { isHourInThePastValidator } from './validators/isHourInThePastValidator';

@Injectable()
export class CreateEventFormService {
  private builder = inject(NonNullableFormBuilder);
  private eventForm = this.createForm();

  getForm(): FormGroup<EventForm> {
    return this.eventForm;
  }

  resetForm() {
    this.eventForm.reset();
  }

  private createForm() {
    return this.builder.group<EventForm>({
      eventTypeForm: this.builder.group({
        isInternal: this.builder.control(false),
        isPrivate: this.builder.control(false),
        isGroup: this.builder.control(false),
        isExternal: this.builder.control(false),
      }),
      eventDetailsForm: this.builder.group(
        {
          group: this.builder.control<number | null>(null),
          limitedPlaces: this.builder.control(
            { value: 1, disabled: true },
            {
              validators: [Validators.required, Validators.min(1), Validators.max(10000)],
            }
          ),
          isLimitedPlaces: this.builder.control(false),
          isConfirmationRequired: this.builder.control(false),
          name: this.builder.control('', {
            validators: [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
          }),
          category: this.builder.control('', {
            validators: [Validators.required],
          }),
          startDate: this.builder.control('', {
            validators: [Validators.required],
          }),
          hour: this.builder.control('', {
            validators: [Validators.required],
          }),
          postCode: this.builder.control('', {
            validators: [Validators.required, Validators.pattern(pattern.postCode)],
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
