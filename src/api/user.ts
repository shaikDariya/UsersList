import axios from "./";
import urls from "./url";

type LoginSucess = {
  token: string;
  message: string;
};

type LoginFailed = {
  error_message: string;
};

export const loginAPi = async (
  accountId: string,
  pswd: string
): Promise<LoginSucess & LoginFailed> => {
  const response = await axios.post(
    urls.user.login,
    JSON.stringify({
      accountId,
      pswd
    })
  );
  return response.data;
};
