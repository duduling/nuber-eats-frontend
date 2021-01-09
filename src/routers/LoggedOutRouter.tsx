import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateAccount from "pages/create-account";
import { Login } from "pages/login";

const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} children={<Login />} />
        <Route path={"/crete-account"} children={<CreateAccount />} />
      </Switch>
    </Router>
  );
};

export default LoggedOutRouter;
