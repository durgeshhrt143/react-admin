import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
const TotalFirms = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Total Firms</h1>
        <Breadcrumb breadcrumb="Total Firms" />
      </section>
      <section className="content">
        <div className="box box-primary">
          <section className="content">
            <div className="box box-primary">
              <div className="box-body">
                <div className="table-responsive">
                  <table className="table table-hover tab-bold-head">
                    <thead>
                      <tr>
                        <th />
                        <th>Sr No</th>
                        <th>Firm Name</th>
                        <th>Client Name</th>
                        <th>no. of users</th>
                        <th>Email ID</th>
                        <th>Action</th>
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
                          <a className="folder" href="funds.html">
                            <span>
                              <i className="glyphicon glyphicon-folder-open" />
                            </span>
                            <p
                              style={{
                                display: "inline",
                                color: "#1f2021cc"
                              }}
                            >
                              Aeon 1
                            </p>
                          </a>
                        </td>
                        <td>Devendra</td>
                        <td>3</td>
                        <td>DK@gmail.com</td>
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
                            <button type="button" className="btn btn-primary">
                              <i className="glyphicon glyphicon-user" />
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
                          <span aria-hidden="true">»</span>
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

export default TotalFirms;
