import { ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventDetailsForm, EventTypeForm, Hashtag } from '../create-event.interface';
import { map, Observable, startWith, Subject, takeUntil, tap } from 'rxjs';
import { HourErrorStateMatcher } from './hourErrorStateMatcher';
import { CreateEventFormService } from '../create-event-form.service';
import { CreateEventService } from '../create-event.service';
import { ErrorhandlerService } from '@shared/Interceptor/errorhandler.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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

  @ViewChild('hashtagInput') hashtagInput!: ElementRef<HTMLInputElement>;

  errorClientServer$ = this.errorService.error$;
  categories$ = this.createEventService.fetchAllCategories();
  allHashtags$ = this.createEventService.fetchAllHashtags();
  groups$ = this.createEventService.fetchUserGroups();

  hashtagCtrl = new FormControl('');
  filteredHashtags$?: Observable<string[]>;
  hashtags: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  isHashtagInputVisible = false;
  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
  today = new Date();
  hourMatcher = new HourErrorStateMatcher();

  constructor() {
    this.eventTypeForm = this.createEventForm.getForm().controls.eventTypeForm;
    this.eventDetailsForm = this.createEventForm.getForm().controls.eventDetailsForm;

    this.createEventService.fetchAllHashtags().subscribe(result => {
      this.allHashtags = result;
      this.filteredHashtags$ = this.hashtagCtrl.valueChanges.pipe(
        startWith(null),
        map((hashtag: string | null) => (hashtag ? this.filter(hashtag) : this.allHashtags.slice()))
      );
    });
  }

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

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('filtruje');
    return this.allHashtags.filter(hashtag => hashtag.toLowerCase().includes(filterValue));
  }

  toggleHashtagInput() {
    this.isHashtagInputVisible = this.isHashtagInputVisible!;
  }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.hashtags.push(value);
    }

    event.chipInput!.clear();

    this.hashtagCtrl.setValue(null);
  }

  remove(fruit: string) {
    const index = this.hashtags.indexOf(fruit);

    if (index >= 0) {
      this.hashtags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.hashtags.push(event.option.viewValue);
    this.hashtagInput.nativeElement.value = '';
    this.hashtagCtrl.setValue(null);
  }

  handleSubmit() {
    this.eventDetailsForm.markAllAsTouched();

    if (this.eventDetailsForm.invalid) return;
  }

  ngOnDestroy() {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
