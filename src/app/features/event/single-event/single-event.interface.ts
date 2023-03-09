import { Role } from '../../auth/store/user.interface';

export interface EventInfo {
  isConfirmationRequired: boolean;
  limitedPlaces: number;
  eventParticipationStats: EventParticipationStats;
  isPrivate: boolean;
  group: Group;
  cycleLenght: number;
  name: string;
  category: Category;
  startDate: string;
  hour: string;
  location: Location;
  description: string;
  hashtags: SingleHashtag[];
}

export interface EventOwner {
  userId: number;
}

export interface EventParticipationStats {
  accepted: number;
  pending: number;
  rejected: number;
}

export interface Group {
  id: string;
  name: string;
}

export interface SingleEventStateInterface {
  eventOwner: EventOwner;
  id: string;
  eventInfo: EventInfo;
}

export interface Category {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  altitude: number | null;
  latitude: number | null;
  postCode: string;
  city: string;
  street: string;
  streetNumber: string;
  apartmentNumber: string;
}

export interface SingleHashtag {
  id: string;
  value: string;
}

export interface EventOptions extends Record<Role, string[]> {
  eventOwner: string[];
}
