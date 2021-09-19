import React from "react";
import { NavLink } from "react-router-dom";
import './PageOne.css'
const PageOne = () => {
  return (
    <>
      <div className="page-one">
        <div className="in">
          <NavLink className="link" to="/admin">
            Admin
          </NavLink>
          <NavLink className="link" to="/gramsevak">
            GramSevak
          </NavLink>
          <NavLink className="link" to="/user">
            User
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageOne;
