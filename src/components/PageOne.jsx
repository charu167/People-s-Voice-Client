import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Page_one.css";

const PageOne = () => {
  return (
    <section className="middle">
      <button className="btn">
        <NavLink className="link" to="/gramsevak/register">
          I'm a GramSevak
        </NavLink>
      </button>

      <button className="btn">
        <NavLink className="link" to="/admin/register">
          I'm an Admin
        </NavLink>
      </button>
    </section>
  );
};

export default PageOne;
