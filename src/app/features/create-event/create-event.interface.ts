import { FormControl, FormGroup } from '@angular/forms';

export interface EventForm {
  eventTypeForm: FormGroup<EventTypeForm>;
  eventDetailsForm: FormGroup<EventDetailsForm>;
}

export interface EventTypeForm {
  isInternal: FormControl<boolean>;
  isPrivate: FormControl<boolean>;
  isGroup: FormControl<boolean>;
  isExternal: FormControl<boolean>;
}

export interface EventDetailsForm {
  group: FormControl<null | number>;
  isConfirmationRequired: FormControl<boolean>;
  limitedPlacesGroup: FormGroup<LimitedPlacesGroup>;
  name: FormControl<string>;
  category: FormControl<string>;
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

export interface LimitedPlacesGroup {
  limitedPlaces: FormControl<number>;
  isLimitedPlaces: FormControl<boolean>;
}

export interface Group {
  groupOwner: {
    basicUserId: number;
  };
  isUserMember: boolean;
  id: number;
  name: string;
  description: string;
  numberOfMembers: number;
}

export interface EventCategories {
  name: string;
}

export interface CategoryPropositionForm {
  name: string;
  description: string;
}
