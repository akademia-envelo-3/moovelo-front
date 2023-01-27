export interface EventCard {
  id: number;
  eventInfo: EventCardInfo;
}

export interface EventCardInfo {
  name: string;
  category: EventCardCategory;
  startDate: string;
  hashtags?: EventCardHashtag[];
  isConfirmationRequired: boolean;
  isPrivate: boolean;
  group: boolean;
  isCyclic: boolean;
  city: string;
  acceptedStatusUsers: number;
}

export interface EventCardCategory {
  id: number;
  name: string;
}

export interface EventCardHashtag {
  id: number;
  value: string;
}

export interface EventParticipant {
  userId: number;
  firstName: string;
  lastName: string;
}

export type EventParticipantsStatus = 'accepted' | 'pending' | 'rejected';

export interface ActiveParticipantList {
  type: EventParticipantsStatus;
  list: EventParticipant[];
}
