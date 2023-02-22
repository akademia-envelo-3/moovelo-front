export interface LoginData {
  accessToken: string;
  user: {
    type: string;
    id: number;
  };
}

export interface LoggedUserData {
  email: string;
  type: string;
  id: number;
}
