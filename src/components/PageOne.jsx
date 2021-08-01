import React from "react";
import { NavLink } from "react-router-dom";
// import "../css/Page_one.css";

const PageOne = () => {
  return (
    // <section className="middle">
    //   <button className="btn">
    //     <NavLink className="link" to="/gramsevak">
    //       I'm a GramSevak
    //     </NavLink>
    //   </button>

    //   <button className="btn">
    //     <NavLink className="link" to="/admin">
    //       I'm an Admin
    //     </NavLink>
    //   </button>
    // </section>

    <div class="d-flex p-2 bd-highlight justify-content-center alignt-items-center bg-light page-one">
      <button type="button" class="page-one-btn">
      <NavLink className="link" to="/admin">
          I'm an Admin
        </NavLink>
      </button>
      <button type="button" class="page-one-btn">
      <NavLink className="link" to="/gramsevak">
          I'm a GramSevak
        </NavLink>
      </button>
    </div>
  );
};

export default PageOne;
