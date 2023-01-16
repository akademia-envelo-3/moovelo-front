export interface GroupListItem {
  id: number;
  name: string;
  description: string;
}

export interface GroupListError {
  isError: boolean;
  errorStatus: number;
}
