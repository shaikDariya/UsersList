import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { LOGIN_PATH, USER_PATH } from "../constants";
import PublicRoute from "../common/PublicRoute";
import PrivateRoute from "../common/PrivateRoute";
import LoadingPage from "../common/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            path={LOGIN_PATH}
            component={lazy(() => import("./Login"))}
          />
          <PrivateRoute
            path={USER_PATH}
            component={lazy(() => import("./UsersList"))}
          />
          <Route path="**">
            <Redirect to={LOGIN_PATH} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
