import React from "react";

const GSList = () => {
  return (
    <>
      <div className="outermost-container">
        <div class="col-xl-12 col-lg-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Visitors</h3>
              <div class="card-options d-none d-sm-block">
                <div class="btn-group btn-sm">
                  <button type="button" class="btn btn-light btn-sm">
                    <span class="">Day</span>
                  </button>
                  <button type="button" class="btn btn-light btn-sm">
                    <span class="">Month</span>
                  </button>
                  <button type="button" class="btn btn-light btn-sm">
                    <span class="">Year</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table card-table table-vcenter  border text-nowrap">
                  <thead>
                    <tr>
                      <th class="w-1">ID</th>
                      <th>Visitor Name</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th>Phone Number</th>
                      <th>Date</th>
                      <th>Loaction</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span class="text-muted num-font">#6754</span>
                      </td>
                      <td>Adam Berry</td>
                      <td>Male</td>
                      <td>
                        <span class="badge badge-pill badge-primary">
                          Normal
                        </span>
                      </td>
                      <td class="num-font">+1 23 456 9876</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        10-10-2019
                      </td>
                      <td>USA</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-muted num-font">#5643</span>
                      </td>
                      <td>Kylie Peake</td>
                      <td>Female</td>
                      <td>
                        <span class="badge badge-pill badge-success">
                          Unusual
                        </span>
                      </td>
                      <td class="num-font">+0 45 678 9966</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        08-10-2019
                      </td>
                      <td>Arizona</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-muted num-font num-font">#8765</span>
                      </td>
                      <td>Katherine Hart</td>
                      <td>Female</td>
                      <td>
                        <span class="badge badge-pill badge-warning">
                          Normal
                        </span>
                      </td>
                      <td class="num-font">+1 98 675 4325</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        07-10-2019
                      </td>
                      <td>Montana</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-muted num-font">#4563</span>
                      </td>
                      <td>Sarah Jones</td>
                      <td>Male</td>
                      <td>
                        <span class="badge badge-pill badge-danger">Rare</span>
                      </td>
                      <td class="num-font">+0 78 654 3456</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        05-10-2019
                      </td>
                      <td>South Carolina</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-muted num-font">#2345</span>
                      </td>
                      <td>Jason Bond</td>
                      <td>Male</td>
                      <td>
                        <span class="badge badge-pill badge-info">Unusual</span>
                      </td>
                      <td class="num-font">+1 89 675 4563</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        04-10-2019
                      </td>
                      <td>Virginia</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="text-muted num-font">#9876</span>
                      </td>
                      <td>Victoria Cornish</td>
                      <td>Female</td>
                      <td>
                        <span class="badge badge-pill badge-success">Rare</span>
                      </td>
                      <td class="num-font">+0 67 345 9876</td>
                      <td>
                        <i class="mdi mdi-av-timer text-muted mr-1 num-font"></i>
                        03-10-2019
                      </td>
                      <td>Washington</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Edit"
                        >
                          <i class="fe fe-edit-2 text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Check"
                        >
                          <i class="fe fe-file text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Add"
                        >
                          <i class="fe fe-folder-plus text-dark fs-16"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="mr-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i class="fe fe-trash-2 text-dark fs-16"></i>
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
    </>
  );
};

export default GSList;
