export interface GroupListItem {
  id: number;
  name: string;
  description: string;
}

export interface SingleGroup {
  id: number;
  name: string;
  description: string;
  groupOwner: SingleGroupOwner;
  groupMembers: SingleGroupMembers[];
  events: SingleGroupEvents[];
}

export interface SingleGroupOwner {
  basicUserId: number;
}

export interface SingleGroupMembers {
  id: number;
  firstName: string;
  lastName: string;
}

export interface SingleGroupEvents {
  id: number;
  eventInfo: EventInfo;
}

export interface EventInfo {
  name: string;
  category: Category;
  startDate: string;
  hashtags: Hashtag[];
  isConfirmationRequired: boolean;
  isPrivate: boolean;
  group: boolean;
  cycleLength: number;
  city: string;
  acceptedStatusUsers: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Hashtag {
  id: number;
  value: string;
}
