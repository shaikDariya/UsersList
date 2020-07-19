import { initialState, UserListItem } from "./UsersListState";
import {
  USERS_LIST_REQ,
  UsersListAction,
  USERS_LIST_SUCESS,
  USERS_LIST_FAILED,
  FILTER_LIST
} from "./UsersListActions";
import { FilterOptionsType } from "../../App/UsersList/UsersListFilters";

const filterList = (
  options: FilterOptionsType,
  data: UserListItem[]
): UserListItem[] => {
  let filterd = [...data];
  if (options.age20plus) {
    filterd = filterd.filter(item => item.age >= 20);
  }

  if (options.age30plus) {
    filterd = filterd.filter(item => item.age > 30);
  }

  if (options.fullNamelength10plus) {
    filterd = filterd.filter(
      item => `${item.firstName}${item.lastName}`.length > 10
    );
  }
  return filterd;
};

const UsersListReducer = (state = initialState, action: UsersListAction) => {
  switch (action.type) {
    case USERS_LIST_REQ:
      return { ...state, isLoading: true };
    case USERS_LIST_SUCESS:
      return {
        ...state,
        isLoading: false,
        orginal: action.payload,
        filterd: action.payload
      };
    case USERS_LIST_FAILED:
      return { ...state, isLoading: false };
    case FILTER_LIST:
      const filterd = filterList(action.payload, state.orginal);
      return { ...state, filterd };
    default:
      return { ...state };
  }
};

export default UsersListReducer;
