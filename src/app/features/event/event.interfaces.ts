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

export interface EventParticipation {
  accepted: Participant[];
  pending: Participant[];
  rejected: Participant[];
  visitors: Participant[];
}

export interface Participant {
  userId: number;
  firstName: string;
  lastName: string;
}

export type ParticipantsStatus = 'accepted' | 'pending' | 'rejected';

export interface ActiveParticipantList {
  type: ParticipantsStatus;
  list: Participant[];
}
