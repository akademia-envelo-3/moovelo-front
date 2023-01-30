import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { EventDetailsForm, EventTypeForm } from '../create-event.interface';
import { Subject, takeUntil } from 'rxjs';
import { HourErrorStateMatcher } from './hourErrorStateMatcher';
import { CreateEventFormService } from '../create-event-form.service';
import { CreateEventService } from '../create-event.service';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsFormComponent implements OnInit, OnDestroy {
  private createEventForm = inject(CreateEventFormService);
  private createEventService = inject(CreateEventService);
  private errorService = inject(ErrorhandlerService);
  private unsubscribe$$ = new Subject<void>();

  errorClientServer$ = this.errorService.error$;
  categories$ = this.createEventService.getAllCategories();

  constructor() {
    this.eventTypeForm = this.createEventForm.getForm().controls.eventTypeForm;
    this.eventDetailsForm = this.createEventForm.getForm().controls.eventDetailsForm;
  }

  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
  today = new Date();
  hourMatcher = new HourErrorStateMatcher();
  groups$ = this.createEventService.fetchUserGroups();

  ngOnInit() {
    this.isLimitedPlacesCtrl.valueChanges.pipe(takeUntil(this.unsubscribe$$)).subscribe(value => {
      value ? this.limitedPlacesCtrl.enable() : this.limitedPlacesCtrl.disable();
    });

    if (this.isGroup) {
      this.groupCtrl.setValidators(Validators.required);
    }
  }

  get title() {
    return `${
      this.isPrivate
        ? 'prywatne'
        : this.isGroup
        ? 'grupowe'
        : this.isInternal
        ? 'firmowe'
        : this.isExternal
        ? 'zewnętrzne'
        : ''
    }`;
  }

  get isGroup() {
    return this.eventTypeForm.value.isGroup;
  }

  get isInternal() {
    return this.eventTypeForm.value.isInternal;
  }

  get isPrivate() {
    return this.eventTypeForm.value.isPrivate;
  }

  get isExternal() {
    return this.eventTypeForm.value.isExternal;
  }

  handleSubmit() {
    this.eventDetailsForm.markAllAsTouched();
    if (this.eventDetailsForm.invalid) return;
  }

  get groupCtrl() {
    return this.eventDetailsForm.controls.group;
  }

  get isConfirmationRequiredCtrl() {
    return this.eventDetailsForm.controls.isConfirmationRequired;
  }

  get nameCtrl() {
    return this.eventDetailsForm.controls.name;
  }

  get categoryCtrl() {
    return this.eventDetailsForm.controls.category;
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
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
