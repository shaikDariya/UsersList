import axios from "./";
import urls from "./url";
import { UsersListAction } from "../store/UsersList/UsersListActions";
export const fetchUsersListApi = async (): Promise<UsersListAction> => {
  const response = await axios.get(urls.usersList.usersList);
  return response.data;
};
