import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="outermost-container">
        <div className="inner-container">
          <div className="dashboard">
            <div className="dashboard-item">
              <div className="dashboard-title">Complaint Dashboard</div>
              <div className="dashboard-data">
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>New</span>
                    <h1>69</h1>
                  </div>
                  <div className="dash-card-half">
                    <NavLink to="#">
                      <i class="bx bxl-flutter"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>In Process</span>
                    <h1>69</h1>
                  </div>
                  <div className="dash-card-half">
                    <NavLink to="#">
                      <i class="bx bxl-flutter"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="dash-card">
                  <div className="dash-card-half">
                    <span>Completed</span>
                    <h1>69</h1>
                  </div>
                  <div className="dash-card-half">
                    <NavLink to="#">
                      <i class="bx bxl-flutter"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-title">Monthly Analysis</div>
              <div className="dashboard-data">
                <div className="dash-card"></div>
                <div className="dash-card"></div>
              </div>
            </div>

            <div className="dashboard-item">
              <div className="dashboard-title">Latest Complaints</div>
              <div className="dashboard-data">
                <div class="col-xl-8 col-md-12 col-lg-12">
                  <div class="card">
                    <div class="table-responsive">
                      <table class="table card-table table-vcenter text-nowrap">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Complaint Point</th>
                            <th>Phone</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="store.html" class="text-inherit">
                                Test1
                              </a>
                            </td>
                            <td>Pune</td>
                            <td>
                              {/* <span class="status-icon bg-success"></span>{" "} */}
                              Completed
                            </td>
                            <td class="num-font text-center">1234567890</td>
                            <td class="text-center">
                              <a
                                href="javascript:void(0)"
                                class="btn btn-success btn-sm"
                              >
                                Allocated
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
