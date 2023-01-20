import { EventCard } from '../event';

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
  events: EventCard[];
}

export interface SingleGroupOwner {
  basicUserId: number;
}

export interface SingleGroupMembers {
  id: number;
  firstName: string;
  lastName: string;
}
