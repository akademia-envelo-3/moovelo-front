import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EventFormProvider } from '../../event-form-provider';
import { EventTypeForm, EventDetailsForm } from '../create-event/create-event.component';
import { ErrorStateMatcher } from '@angular/material/core';

export class HourErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if (form?.hasError('isHourInThePast')) return true;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  }

  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
  today = new Date();
  hourMatcher = new HourErrorStateMatcher();

  ngOnInit() {
    this.isLimitedPlacesCtrl.valueChanges.subscribe(value => {
      if (value) {
        this.limitedPlacesCtrl.enable();
      } else {
        this.limitedPlacesCtrl.disable();
      }
    });
  }

  handleClick() {
    console.log(this.postCodeCtrl.errors);
  }

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

  get startDateCtrl() {
    return this.eventDetailsForm.controls.startDate;
  }

  get hourCtrl() {
    return this.eventDetailsForm.controls.hour;
  }

  get postCodeCtrl() {
    return this.eventDetailsForm.controls.postCode;
  }
}
