export interface EventCard {
  id: number;
  eventInfo: EventCardInfo;
  eventOwner: EventOwner;
}

export interface EventOwner {
  userId: number;
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

export type ParticipantType = 'Użytkownik' | 'Gość';

export interface EventListError {
  isError: boolean;
  errorStatus: number;
}

export interface EventSurvey {
  question: string;
  isMultipleChoice: boolean;
  answers: {
    id: number;
    value: string;
    voted: number;
  }[];
  yourAnswersIds: {
    id?: number;
  }[];
}

export interface EventComment {
  id: number;
  user: {
    firstname: string;
    lastName: string;
  };
  date: string;
  text: string;
  attachments: [];
}

export interface EventCommentForm {
  text: string;
}
