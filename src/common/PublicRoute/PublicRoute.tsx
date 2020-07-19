import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../../utils/BrowserStorage";
import { USER_PATH } from "../../constants";

const PublicRoute = (props: RouteProps) => {
  if (isAuthenticated()) {
    return <Redirect to={{ pathname: USER_PATH }} />;
  }
  return <Route {...props} />;
};

export default PublicRoute;
