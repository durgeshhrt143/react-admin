import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
const FundDetails = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Fund Details</h1>
        <Breadcrumb breadcrumb="Fund Details" />
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
                        <th>Folder Name</th>
                        <th>Created Date</th>

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
                                display: "inline-block",
                                color: "#1f2021cc",
                                paddingLeft: 10
                              }}
                            >
                              Aeon 1
                            </p>
                          </a>
                        </td>

                        <td> 12/12/2018</td>
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

export default FundDetails;
