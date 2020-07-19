import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../../utils/BrowserStorage";
import { LOGIN_PATH } from "../../constants";

const PrivateRoute = (props: RouteProps) => {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: LOGIN_PATH }} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
