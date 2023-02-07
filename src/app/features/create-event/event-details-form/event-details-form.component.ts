import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { HourErrorStateMatcher } from './hourErrorStateMatcher';
import { CreateEventFormService } from '../create-event-form.service';
import { CreateEventService } from '../create-event.service';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { pattern } from '@shared/patterns/patterns';

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
  private allHashtags: string[] = [];

  errorClientServer$ = this.errorService.error$;
  categories$ = this.createEventService.fetchAllCategories();
  allHashtags$ = this.createEventService.fetchAllHashtags();
  groups$ = this.createEventService.fetchUserGroups();

  hashtagCtrl = new FormControl('', {
    validators: [
      Validators.maxLength(20),
      Validators.minLength(2),
      Validators.pattern(pattern.lettersNumbersDashesAndPolishLettersRegex),
    ],
  });
  filteredHashtags$?: Observable<string[]>;
  hashtags: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  eventTypeForm = this.createEventForm.getForm().controls.eventTypeForm;
  eventDetailsForm = this.createEventForm.getForm().controls.eventDetailsForm;
  today = new Date();
  hourMatcher = new HourErrorStateMatcher();

  ngOnInit() {
    this.isConfirmationRequiredCtrl.valueChanges.pipe(takeUntil(this.unsubscribe$$)).subscribe(value => {
      value ? this.limitedPlacesGroup.enable() : this.limitedPlacesGroup.disable();
    });

    this.isLimitedPlacesCtrl.valueChanges.pipe(takeUntil(this.unsubscribe$$)).subscribe(value => {
      value ? this.limitedPlacesCtrl.enable() : this.limitedPlacesCtrl.disable();
    });
    if (this.isGroup) {
      this.groupCtrl.setValidators(Validators.required);
    }

    this.createEventService.fetchAllHashtags().subscribe(result => {
      this.allHashtags = result;
      this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
        startWith(null),
        map((hashtag: string | null) => (hashtag ? this.filter(hashtag) : this.allHashtags))
      );
    });
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allHashtags.filter(hashtag => hashtag.toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent) {
    if (
      this.hashtagCtrl.invalid ||
      event.value.length < 2 ||
      !pattern.lettersNumbersDashesAndPolishLettersRegex.test(event.value)
    ) {
      return;
    }

    const value = (event.value || '').trim();

    if (value) {
      this.hashtags.push(value);
    }

    if (event.chipInput) {
      event.chipInput.clear();
    }

    this.hashtagCtrl.setValue(null);
  }

  remove(hashtag: string) {
    const hashtagIndex = this.hashtags.indexOf(hashtag);

    if (hashtagIndex >= 0) {
      this.hashtags = this.hashtags.filter((_, index) => index !== hashtagIndex);
    }
  }

  selected(event: MatAutocompleteSelectedEvent) {
    if (this.hashtagCtrl.invalid) return;
    this.hashtags.push(event.option.viewValue);
    this.hashtagCtrl.setValue(null);
  }

  handleSubmit() {
    this.eventDetailsForm.markAllAsTouched();

    if (this.eventDetailsForm.invalid) return;
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

  get limitedPlacesGroup() {
    return this.eventDetailsForm.controls.limitedPlacesGroup;
  }

  get isLimitedPlacesCtrl() {
    return this.eventDetailsForm.controls.limitedPlacesGroup.controls.isLimitedPlaces;
  }

  get limitedPlacesCtrl() {
    return this.eventDetailsForm.controls.limitedPlacesGroup.controls.limitedPlaces;
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

  get hashtagsCtrl() {
    return this.eventDetailsForm.controls.hashtags;
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
