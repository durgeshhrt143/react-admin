import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
import TabsComponent from "../partial/tabs";
const TotalFund = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Total Fund</h1>

        <Breadcrumb breadcrumb="Total Fund" />
      </section>
      <section className="content">
        <div className="box box-primary">
          <div className="box-header with-border">
            <div className="col-md-12 ">
              <TabsComponent />
            </div>
          </div>

          <section className="content">
            <div className="box box-primary">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th />
                      <th>Sr No</th>
                      <th>Fund Name</th>
                      <th>ABN/TFN/CAN</th>
                      <th>Due Date</th>
                      <th style={{ width: 200 }}>Comment</th>
                      <th>Change status</th>
                      <th>Progress Status</th>
                      <th width="200">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <input type="checkbox" style={{ padding: 0 }} />
                        </span>
                      </td>
                      <td>1</td>
                      <td>
                        <a className="folder" href="fundDetails.html">
                          <span>
                            <i
                              className="glyphicon glyphicon-folder-open"
                              aria-hidden="true"
                            />
                          </span>
                          <p
                            style={{
                              display: "inline",
                              color: "#1f2021cc"
                            }}
                          >
                            Audit Aeon 1
                          </p>
                        </a>
                      </td>
                      <td>72 840 921 396</td>
                      <td>02/01/2019</td>
                      <td>Revert us if there any query</td>
                      <td>
                        <div className="form-group formMargin">
                          <select className="form-control" id="sel1">
                            <option>Choose..</option>
                            <option>Hold</option>
                            <option>In Progress</option>
                            <option>Queries</option>
                            <option>Completed-unpaid</option>
                            <option>Completed-Paid</option>
                            <option>Final Review</option>
                            <option>Not Started</option>
                            <option>Amended</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-hold"
                            style={{ width: "30%" }}
                          >
                            15%
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="edit model"
                        >
                          <button type="button" className="btn btn-primary">
                            <i
                              className="glyphicon glyphicon-edit"
                              data-toggle="modal"
                              data-target="#editModal"
                              title="Edit"
                              aria-hidden="true"
                            />
                          </button>
                          <button type="button" className="btn btn-primary">
                            <i
                              className="glyphicon glyphicon-trash"
                              data-toggle="modal"
                              data-target="#deleteModal"
                              title="Delete"
                              aria-hidden="true"
                            />
                          </button>
                          <button type="button" className="btn btn-primary">
                            <i
                              className="glyphicon glyphicon-envelope"
                              data-toggle="modal"
                              data-target="#mailModal"
                              title="Send Mail"
                              aria-hidden="true"
                            />
                          </button>
                          <button type="button" className="btn btn-primary">
                            <i
                              className="glyphicon glyphicon-user"
                              data-toggle="modal"
                              data-target="#userModal"
                              title="Add Add User"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table_footer">
              <div className="row">
                <div className="col-sm-6 pageNo">
                  Showing 1 to 8 of 8 entries
                </div>
                <div className="col-sm-6">
                  <nav>
                    <ul className="pagination pull-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span>«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link " href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span>»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Aux>
  );
};

export default TotalFund;
