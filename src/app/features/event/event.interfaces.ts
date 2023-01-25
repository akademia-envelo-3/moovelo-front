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

export interface EventSurvey {
  question: string;
  isMultipleChoice: boolean;
  answers: [
    {
      id: number;
      value: string;
      voted: number;
    }
  ];
  yourAnswersIds: [
    {
      id: number;
    }
  ];
}
