import React from "react";
import { UsersListProvider } from "../../store/UsersList/UsersListContext";
import UsersList from "./UsersList";

const UserListModule = (): React.ReactElement => (
  <UsersListProvider>
    <UsersList />
  </UsersListProvider>
);

export default React.memo(UserListModule);
