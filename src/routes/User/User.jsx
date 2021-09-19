import React from "react";
import { Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


//Importing components
import ComplaintRegisteration from "../../User/ComplaintRegisteration/ComplaintRegisteration";

const User = () => {



  return (
    <AnimatePresence exitBeforeEnter>
      <Route>
        <ComplaintRegisteration />
      </Route>
    </AnimatePresence>
  );
};

export default User;
