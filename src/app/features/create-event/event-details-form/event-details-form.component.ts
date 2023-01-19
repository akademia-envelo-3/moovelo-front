import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventDetailsForm, EventTypeForm } from '../create-event.interface';
import { Subject, takeUntil } from 'rxjs';
import { HourErrorStateMatcher } from './hourErrorStateMatcher';
import { CreateEventComponent } from '../create-event/create-event.component';
import { CreateEventService } from '../create-event.service';

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsFormComponent implements OnInit, OnDestroy {
  private eventFormProvider = inject(CreateEventService);
  private unsubscribe$ = new Subject<void>();

  constructor() {
    console.log(this.eventFormProvider);
    this.eventTypeForm = this.eventFormProvider.getForm().controls.eventTypeForm;
    this.eventDetailsForm = this.eventFormProvider.getForm().controls.eventDetailsForm;
  }

  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
  today = new Date();
  hourMatcher = new HourErrorStateMatcher();

  ngOnInit() {
    this.isLimitedPlacesCtrl.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      value ? this.limitedPlacesCtrl.enable() : this.limitedPlacesCtrl.disable();
    });
  }

  get title() {
    const value = this.eventTypeForm.value;
    return `${value.isPrivate ? 'prywatne' : value.isGroup ? 'grupowe' : value.isInternal ? 'firmowe' : 'zewnętrzne'}`;
  }

  handleSubmit() {
    this.eventDetailsForm.markAllAsTouched();
    if (this.eventDetailsForm.invalid) return;
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

  get cityCtrl() {
    return this.eventDetailsForm.controls.city;
  }

  get streetCtrl() {
    return this.eventDetailsForm.controls.street;
  }

  get streetNumberCtrl() {
    return this.eventDetailsForm.controls.streetNumber;
  }

  get apartmentNumberCtrl() {
    return this.eventDetailsForm.controls.apartmentNumber;
  }

  get descriptionCtrl() {
    return this.eventDetailsForm.controls.description;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
