import React from "react";
import { NavLink } from "react-router-dom";


const PageOne = () => {
  return (
    
    <div class="d-flex p-2 bd-highlight justify-content-center alignt-items-center bg-light page-one">
      <button type="button" class="page-one-btn">
      <NavLink className="link" to="/admin">
          Admin
        </NavLink>
      </button>
      <button type="button" class="page-one-btn">
      <NavLink className="link" to="/gramsevak">
          GramSevak
        </NavLink>
      </button>
      <button type="button" class="page-one-btn">
      <NavLink className="link" to="/user">
          User
        </NavLink>
      </button>
    </div>
  );
};

export default PageOne;
