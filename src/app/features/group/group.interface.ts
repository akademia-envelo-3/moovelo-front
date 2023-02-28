import { Role } from '../auth/store/user.interface';
import { EventCard } from '../event';

export interface GroupListItem {
  groupOwner: GroupOwner;
  isUserMember: boolean;
  id: number;
  name: string;
  description: string;
  numberOfMembers: number;
}

export interface GroupOwner {
  userId: number;
}

export interface GroupListError {
  isError: boolean;
  errorStatus: number;
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
  userId: number;
}

export interface SingleGroupMembers {
  id: number;
  firstName: string;
  lastName: string;
}

export interface GroupMembersExtended {
  id: number;
  groupMembers: SingleGroupMembers[];
}

export interface GroupOptions extends Record<Role, string[]> {
  groupOwner: string[];
}
