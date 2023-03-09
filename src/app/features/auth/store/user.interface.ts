export interface UserState {
  type: Role;
  id: number;
}

export type Role = 'user' | 'admin' | 'visitor';
