import React from "react";
import { UserListItem } from "../../../store/UsersList/UsersListState";

import styles from "./UserCard.module.scss";

const UserCard = ({ age, firstName, lastName }: UserListItem) => (
  <div className={styles.userCardContainer}>
    <div className={styles.userCardInnerContainer}>
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>Age: {age}</p>
    </div>
  </div>
);

export default UserCard;
