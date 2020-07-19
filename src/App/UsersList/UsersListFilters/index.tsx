import React, { useState } from "react";
import { useUsersListDispatch } from "../../../store/UsersList/UsersListContext";
import styles from "./UserListFilters.module.scss";

export type FilterOptionsType = {
  age20plus: boolean;
  age30plus: boolean;
  fullNamelength10plus: boolean;
};

const FILTER_OPTIONS = {
  age20plus: false,
  age30plus: false,
  fullNamelength10plus: false
};

type FiltersType = "age20plus" | "age30plus" | "fullNamelength10plus";

const UsersListFilters = () => {
  const [options, setOptions] = useState<FilterOptionsType>(FILTER_OPTIONS);
  const { dispatchFilterList } = useUsersListDispatch();
  const handleChange = (option: FiltersType) => {
    const isChecked = options[option];
    const newState = { ...options, [option]: !isChecked };
    setOptions(newState);
    dispatchFilterList(newState);
  };
  return (
    <div className={styles.filterContainer}>
      <h2>Filters: </h2>
      <div>
        <input
          type="checkbox"
          checked={options.age20plus}
          onChange={() => handleChange("age20plus")}
        />
        <label>{`Age >= 20`}</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={options.age30plus}
          onChange={() => handleChange("age30plus")}
        />
        <label>{`Age > 30`}</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={options.fullNamelength10plus}
          onChange={() => handleChange("fullNamelength10plus")}
        />
        <label>{`Lenght of FullName > 10 `}</label>
      </div>
    </div>
  );
};

export default UsersListFilters;
