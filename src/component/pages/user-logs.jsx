import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
import TabsComponent from "../partial/tabs";
const UserLogs = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>User Logs</h1>
        <Breadcrumb breadcrumb="User Logs" />
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
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th />
                        <th>UserName</th>
                        <th>Browser</th>
                        <th>Operating System</th>
                        <th>Role</th>
                        <th>Duration</th>
                        <th>IP Address</th>
                        <th>Last Seen</th>
                        <th>Login</th>
                        <th>Logout</th>
                        <th>Login Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" ">
                          <label className="checkbox-wp  checktick">
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>Devendra@123</td>
                        <td>Mozella(25.0)</td>
                        <td>Linux</td>
                        <td>Admin</td>
                        <td>7 mins</td>
                        <td>192.168.1.125</td>
                        <td>56 min ago</td>
                        <td>Feb 9,2018 3:45 pm</td>
                        <td>-</td>
                        <td>Logged In</td>
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

export default UserLogs;
