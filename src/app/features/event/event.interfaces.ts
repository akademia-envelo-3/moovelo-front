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

export interface EventParticipationStats {
  accepted: number;
  pending: number;
  rejected: number;
}

export interface EventParticipants {
  users: ParticipantUser[];
  visitors: ParticipantVisitor[];
}

export interface ParticipantUser {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ParticipantVisitor {
  firstName: string;
  lastName: string;
}
