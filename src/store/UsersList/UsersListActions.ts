import { Dispatch } from "react";
import { UserListItem } from "./UsersListState";
import { fetchUsersListApi } from "../../api/usersList";
import { FilterOptionsType } from "../../App/UsersList/UsersListFilters";

export interface Action<T> {
  readonly type: string;
  payload: T extends T ? T : undefined;
}

export const USERS_LIST_REQ: "USERS_LIST_REQ" = "USERS_LIST_REQ";
export const USERS_LIST_SUCESS: "USERS_LIST_SUCESS" = "USERS_LIST_SUCESS";
export const USERS_LIST_FAILED: "USERS_LIST_FAILED" = "USERS_LIST_FAILED";

export type UsersListSucess = Action<UserListItem[]>;
export type UsersListFailed = Omit<Action<UsersListAction[]>, "payload">;
export type UsersListAction = UsersListSucess & UsersListFailed;

export const fetchUsersList = () => async (
  dispatch: Dispatch<any>
): Promise<void> => {
  dispatch({ type: USERS_LIST_REQ });
  try {
    const usersList = await fetchUsersListApi();
    dispatch({ type: USERS_LIST_SUCESS, payload: usersList });
  } catch (error) {
    dispatch({ type: USERS_LIST_FAILED });
  }
};

export const FILTER_LIST: "FILTER_LIST" = "FILTER_LIST";

export type FilterListAction = Action<FilterOptionsType>;

export const filterList = (filterOptions: FilterOptionsType) => async (
  dispatch: Dispatch<any>
) => {
  dispatch({ type: FILTER_LIST, payload: filterOptions });
};

export type UsersListActions = UsersListAction | FilterListAction;
