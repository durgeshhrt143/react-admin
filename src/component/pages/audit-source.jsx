import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
const AuditSource = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Audit Source</h1>
        <Breadcrumb breadcrumb="Audit Source" />
      </section>

      <section className="content">
        <div className="box">
          <div className="box-body">
            <div className="table-responsive">
              <table
                className="table table-hover tab-bold-head"
                id="dtBasicExample"
              >
                <thead>
                  <tr>
                    <th />
                    <th>File Name</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th width="20%">Image Link</th>
                    <th>Uploaded On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" style={{ padding: 0 }} />
                    </td>
                    <td>
                      <a className="folder" href="#">
                        <span>
                          <i
                            className="glyphicon glyphicon-download-alt"
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                        </span>
                        <p style={{ display: "inline", color: "#1f2021cc" }}>
                          abc.jpg
                        </p>
                      </a>
                    </td>
                    <td>2 mb</td>
                    <td>Image</td>
                    <td>
                      auditsuperaustralia.com.au/auditsuperv3/web/app_dev.php/firm/doc-imageLink?id=56fb7bb48484191866206b25
                    </td>
                    <td>12/12/2018</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary">
                          <i
                            className="glyphicon glyphicon-download"
                            title="download"
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
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" style={{ padding: 0 }} />
                    </td>
                    <td>
                      <a className="folder" href="#">
                        <span>
                          <i
                            className="glyphicon glyphicon-download-alt"
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                        </span>
                        <p style={{ display: "inline", color: "#1f2021cc" }}>
                          abc.docx
                        </p>
                      </a>
                    </td>
                    <td>2 mb</td>
                    <td>Docx</td>
                    <td>
                      auditsuperaustralia.com.au/auditsuperv3/web/app_dev.php/firm/doc-imageLink?id=56fb7bb68484191866206b27
                    </td>
                    <td>12/12/2018</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary">
                          <i
                            className="glyphicon glyphicon-download"
                            title="download"
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table_footer">
              <div className="col-sm-6 pageNo">Showing 1 to 8 of 8 entries</div>
              <div className="col-sm-6">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pull-right">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
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
        </div>
      </section>
    </Aux>
  );
};

export default AuditSource;
