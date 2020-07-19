import React, {
  ReactElement,
  useReducer,
  createContext,
  useContext
} from "react";
import UsersListReducer from "./UsersListReducer";
import { initialState, UsersList } from "./UsersListState";
import { fetchUsersList, filterList } from "./UsersListActions";
import { FilterOptionsType } from "../../App/UsersList/UsersListFilters";

interface ProviderProps {
  children: ReactElement;
}

interface UsersListDispatchProps {
  dispatchUsersList: () => void;
  dispatchFilterList: (options: FilterOptionsType) => void;
}

const UsersListStateContext = createContext<UsersList>(initialState);
const UsersListDispatchContext = createContext<UsersListDispatchProps>(
  {} as UsersListDispatchProps
);

const UsersListProvider = ({ children }: ProviderProps): ReactElement => {
  const [usersList, dispatch] = useReducer(UsersListReducer, initialState);
  const dispatchUsersList = () => fetchUsersList()(dispatch);
  const dispatchFilterList = (filterOptions: FilterOptionsType) => {
    filterList(filterOptions)(dispatch);
  };
  return (
    <UsersListStateContext.Provider value={usersList}>
      <UsersListDispatchContext.Provider
        value={{ dispatchUsersList, dispatchFilterList }}
      >
        {children}
      </UsersListDispatchContext.Provider>
    </UsersListStateContext.Provider>
  );
};

const useUsersListState = () => useContext<UsersList>(UsersListStateContext);
const useUsersListDispatch = () =>
  useContext<UsersListDispatchProps>(UsersListDispatchContext);

export { UsersListProvider, useUsersListState, useUsersListDispatch };
