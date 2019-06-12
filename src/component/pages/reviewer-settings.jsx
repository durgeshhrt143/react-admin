import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
import TabsComponent from "../partial/tabs";
const ReviewerSettings = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Reviewer Settings</h1>
        <Breadcrumb breadcrumb="Reviewer Settings" />
      </section>
      <section className="content">
        <div className="box box-primary">
          <div className="box-header with-border">
            <div className="col-md-12">
              <TabsComponent />
            </div>
          </div>

          <section className="content">
            <div className="box box-primary">
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    className="table table-hover tab-bold-head"
                    id="dtBasicExample"
                  >
                    <thead>
                      <tr>
                        <th />
                        <th />
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Last Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="checkbox-wp  checktick">
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>8</td>
                        <td>SK Jain</td>
                        <td>satheeshk@jainirrigation.com</td>
                        <td>9599 187 945</td>
                        <td>Active</td>
                        <td>Today</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button type="button" className="btn btn-primary">
                              <i className="glyphicon glyphicon-edit" />
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="glyphicon glyphicon-wrench" />
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="glyphicon glyphicon-trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default ReviewerSettings;
