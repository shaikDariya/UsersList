export type UserListItem = {
  accountId: string;
  age: number;
  firstName: string;
  lastName: string;
};

export type UsersList = {
  isLoading: boolean;
  orginal: UserListItem[];
  filterd: UserListItem[];
};

export const initialState: UsersList = {
  isLoading: false,
  orginal: [],
  filterd: []
};
