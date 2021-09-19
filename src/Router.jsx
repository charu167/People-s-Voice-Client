import { Route } from "react-router-dom";

import Gramsevak from "../src/routes/GramSevak/Gramsevak";
import User from "./routes/User/User";
import Admin from "../src/routes/Admin/Admin";
import PageOne from "./components/utilities/PageOne";

import React from "react";

const Router = () => {
  return (
    <>
      <Route exact path="/">
        <PageOne />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/gramsevak">
        <Gramsevak />
      </Route>

      <Route path="/user">
        <User />
      </Route>
    </>
  );
};

export default Router;
