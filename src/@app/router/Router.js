import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import DefaultRoute from "./utils/DefaultRoute";
import {DASHBOARD} from "./utils/constants/routes";
import Dashboard from "../../pages/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultRoute path={DASHBOARD} exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
