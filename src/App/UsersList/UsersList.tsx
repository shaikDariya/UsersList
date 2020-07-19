import React, { useEffect } from "react";

import {
  useUsersListState,
  useUsersListDispatch
} from "../../store/UsersList/UsersListContext";
import { UserListItem } from "../../store/UsersList/UsersListState";
import LoadingPage from "../../common/LoadingPage";
import UserCard from "./UserCard";
import UsersListFilters from "./UsersListFilters";
import styles from "./UsersList.module.scss";

const UsersList = () => {
  const { isLoading, filterd } = useUsersListState();
  const { dispatchUsersList } = useUsersListDispatch();
  useEffect(() => {
    dispatchUsersList();
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className={`${styles.userListContainer} flex`}>
      <div>
        <UsersListFilters />
      </div>
      <div className={`${styles.cardContainer}`}>
        <h4>User Cards</h4>
        <div className="flex flexWrap">
          {filterd.length
            ? filterd.map((userItem: UserListItem, index: number) => (
                <UserCard {...userItem} key={`${index}`} />
              ))
            : "No Users Available"}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
