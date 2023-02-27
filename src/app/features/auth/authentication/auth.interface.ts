import { Role } from '../store/user.interface';

export interface LoginData {
  accessToken: string;
  user: {
    type: Role;
    id: number;
  };
}

export interface LoggedUserData {
  email: string;
  type: Role;
  id: number;
}
