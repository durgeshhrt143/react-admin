import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
import TabsComponent from "../partial/tabs";
const UserActivity = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>User Activity</h1>
        <Breadcrumb breadcrumb="User Activity" />
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
                        <th>Log Code</th>
                        <th>Date</th>
                        <th>UserName</th>
                        <th>Type</th>
                        <th>Source IP</th>
                        <th>Messege</th>
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
                        <td>#356</td>
                        <td>Feb 9,2018 3:45 pm</td>
                        <td>Sagar123</td>
                        <td>Admin</td>
                        <td>192.168.1.1</td>
                        <td>Changed the Profile Image</td>
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

export default UserActivity;
