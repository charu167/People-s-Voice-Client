import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="outermost-container">
        <div className="">
          <h1>Complaint Dashboard</h1>
        </div>
        <div className="">
          <h1>Monthly Analysis</h1>
        </div>
        <div className="">
          <h1>Latest Complaint</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
