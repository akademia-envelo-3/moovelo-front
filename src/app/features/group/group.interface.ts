export interface GroupListItem {
  groupOwner: GroupOwner;
  isUserMember: boolean;
  id: number;
  name: string;
  description: string;
  numberOfMembers: number;
}

export interface GroupOwner {
  basicUserId: number;
}
