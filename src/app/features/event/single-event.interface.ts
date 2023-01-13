export interface EventInfo {
  isConfirmationRequired: boolean;
  limitedPlaces: number;
  eventParticipationStats: eventParticipationStats;
  isPrivate: boolean;
  group: group;
  cycleLenght: number;
  name: string;
  category: category;
  startDate: string;
  hour: string;
  location: location;
  description: string;
  hashtags: singleHashtag[];
}
export interface eventParticipationStats {
  accepted: number;
  pending: number;
  rejected: number;
}
export interface group {
  id: string;
  name: string;
}

export interface SingleEventStateInterface {
  eventId: string;
  eventInfo: EventInfo;
}
export interface category {
  id: string;
  name: string;
}
export interface location {
  id: string;
  altitude: number;
  latitude: number;
  postCode: string;
  city: string;
  street: string;
  streetNumber: string;
  apartmentNumber: string;
}
export interface singleHashtag {
  id: string;
  value: string;
}
