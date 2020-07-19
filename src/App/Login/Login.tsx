import React, { FormEvent, useState, ChangeEvent } from "react";
import { loginAPi } from "../../api/user";
import { setToLocalStorage } from "../../utils/BrowserStorage";
import { AUTH_KEY, USER_PATH } from "../../constants";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.scss";

function Login() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const { token, error_message } = await loginAPi(userId, password);
      if (token) {
        token && setToLocalStorage(AUTH_KEY, token);
        history.push(USER_PATH);
      }
      if (error_message) {
        alert(error_message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function handleOnChange(
    event: ChangeEvent,
    callback: (newValue: string) => void
  ) {
    callback(event.target.value);
  }
  return (
    <div className={`${styles.loginContainer} flex fullHeight center`}>
      <div className={styles.loginInnerContainer}>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>User Id: </label>
            <input
              type="text"
              placeholder="User id"
              value={userId}
              onChange={(event: ChangeEvent) =>
                handleOnChange(event, setUserId)
              }
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event: ChangeEvent) =>
                handleOnChange(event, setPassword)
              }
            />
          </div>
          <button type="submit" disabled={!userId || !password}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
