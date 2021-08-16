import React from "react";
import { motion } from "framer-motion";

const UserDetails = () => {
  return (
    <>
      <motion.div
        className="outermost-container"
        initial={{ y: 500 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          y: -500,
          transition: { duration: 0.3, type: "spring", ease: "ease-in-out" },
        }}
      >
        <div className="gs-table">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Users List</h3>
              </div>
              <div className="options">
                <div className="search-box">Search</div>
                <div className="item-count">Item Count</div>
                <div className="pagination">Pagination</div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table card-table table-vcenter  border text-nowrap">
                    <thead>
                      <tr>
                        <th className="w-1">Sr. No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Status</th>
                        <th>Profile</th>
                        {/* <th>Profile</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="text-muted num-font">1</span>
                        </td>
                        <td>Citizen 1</td>
                        <td>Pune</td>
                        <td className="num-font">1234567890</td>
                        <td>
                          {/* <i className="mdi mdi-av-timer text-muted mr-1 num-font"></i> */}
                          test@test.com
                        </td>
                        <td>
                          <span className="badge badge-pill badge-primary">
                            Normal
                          </span>
                        </td>
                        {/* <td>USA</td> */}
                        <td>
                          <a
                            href="javascript:void(0)"
                            className="mr-3"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i className="fe fe-edit-2 text-dark fs-16"></i>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="mr-3"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Check"
                          >
                            <i className="fe fe-file text-dark fs-16"></i>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="mr-3"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Add"
                          >
                            <i className="fe fe-folder-plus text-dark fs-16"></i>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="mr-3"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i className="fe fe-trash-2 text-dark fs-16"></i>
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
      </motion.div>
    </>
  );
};

export default UserDetails;
