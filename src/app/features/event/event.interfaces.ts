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
  accepted: Participants[];
  pending: Participants[];
  rejected: Participants[];
  visitors: Participants[];
}

export interface Participants {
  userId: number;
  firstName: string;
  lastName: string;
}
