import React from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
const WipTable = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Wip Table</h1>
        <Breadcrumb breadcrumb="Wip Table" />
      </section>
      <section className="content">
        <div className="box box-primary">
          <section className="content">
            <div className="box box-primary">
              <div className="box-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>No of Funds</th>
                        <th>ABN/TFN/CAN</th>
                        <th>Fund Name</th>
                        <th>Trustees Name</th>
                        <th>Audit Year</th>
                        <th>Firm</th>
                        <th>Auditor</th>
                        <th>Accountant</th>
                        <th>Status</th>
                        <th>Documents</th>
                        <th>Audit sheet</th>
                        <th>Audit Letters</th>
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr>
                        <td>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>Fund 1</option>
                              <option>Fund 2</option>
                              <option>Fund 3</option>
                              <option>Fund 4</option>
                              <option>Fund 5</option>
                              <option>Fund 6</option>
                            </select>
                          </div>
                        </td>
                        <td>72 840 921 396</td>
                        <td>Abacus SF</td>
                        <td>
                          Charles Smith <br />
                          Richard Smith <br />
                          Tony Smith <br />
                          Douglas Smith <br />
                          Tony Smith
                        </td>
                        <td>
                          2018 <br />
                          2019 <br />
                          2020 <br />
                          2021 <br />
                          Create New Year
                        </td>
                        <td>
                          aeon 1 <br />
                          aeon 2 <br />
                          aeon 3 <br />
                          aeon 4 <br />
                          aeon 5
                        </td>
                        <td>Devendra</td>
                        <td>
                          Prachi <br />
                          Gauri <br />
                          Neha
                          <br />
                          aboli
                          <br />
                          Priyanka
                        </td>
                        <td>
                          Completed <br />
                          Hold <br />
                          Not Started <br />
                          In Progress <br />
                          Queries <br />
                        </td>
                        <td />
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>Fund 1</option>
                              <option>Fund 2</option>
                              <option>Fund 3</option>
                              <option>Fund 4</option>
                              <option>Fund 5</option>
                              <option>Fund 6</option>
                            </select>
                          </div>
                        </td>
                        <td>72 840 921 396</td>
                        <td>Abacus SF</td>
                        <td>
                          Charles Smith <br />
                          Richard Smith <br />
                          Tony Smith <br />
                          Douglas Smith <br />
                          Tony Smith
                        </td>
                        <td>
                          2018 <br />
                          2019 <br />
                          2020 <br />
                          2021 <br />
                          Create New Year
                        </td>
                        <td>
                          aeon 1 <br />
                          aeon 2 <br />
                          aeon 3 <br />
                          aeon 4 <br />
                          aeon 5
                        </td>
                        <td>Devendra</td>
                        <td>
                          Prachi <br />
                          Gauri <br />
                          Neha
                          <br />
                          aboli
                          <br />
                          Priyanka
                        </td>
                        <td>
                          Completed <br />
                          Hold <br />
                          Not Started <br />
                          In Progress <br />
                          Queries <br />
                        </td>
                        <td />
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>Fund 1</option>
                              <option>Fund 2</option>
                              <option>Fund 3</option>
                              <option>Fund 4</option>
                              <option>Fund 5</option>
                              <option>Fund 6</option>
                            </select>
                          </div>
                        </td>
                        <td>72 840 921 396</td>
                        <td>Abacus SF</td>
                        <td>
                          Charles Smith <br />
                          Richard Smith <br />
                          Tony Smith <br />
                          Douglas Smith <br />
                          Tony Smith
                        </td>
                        <td>
                          2018 <br />
                          2019 <br />
                          2020 <br />
                          2021 <br />
                          Create New Year
                        </td>
                        <td>
                          aeon 1 <br />
                          aeon 2 <br />
                          aeon 3 <br />
                          aeon 4 <br />
                          aeon 5
                        </td>
                        <td>Devendra</td>
                        <td>
                          Prachi <br />
                          Gauri <br />
                          Neha
                          <br />
                          aboli
                          <br />
                          Priyanka
                        </td>
                        <td>
                          Completed <br />
                          Hold <br />
                          Not Started <br />
                          In Progress <br />
                          Queries <br />
                        </td>
                        <td />
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>Fund 1</option>
                              <option>Fund 2</option>
                              <option>Fund 3</option>
                              <option>Fund 4</option>
                              <option>Fund 5</option>
                              <option>Fund 6</option>
                            </select>
                          </div>
                        </td>
                        <td>72 840 921 396</td>
                        <td>Abacus SF</td>
                        <td>
                          Charles Smith <br />
                          Richard Smith <br />
                          Tony Smith <br />
                          Douglas Smith <br />
                          Tony Smith
                        </td>
                        <td>
                          2018 <br />
                          2019 <br />
                          2020 <br />
                          2021 <br />
                          Create New Year
                        </td>
                        <td>
                          aeon 1 <br />
                          aeon 2 <br />
                          aeon 3 <br />
                          aeon 4 <br />
                          aeon 5
                        </td>
                        <td>Devendra</td>
                        <td>
                          Prachi <br />
                          Gauri <br />
                          Neha
                          <br />
                          aboli
                          <br />
                          Priyanka
                        </td>
                        <td>
                          Completed <br />
                          Hold <br />
                          Not Started <br />
                          In Progress <br />
                          Queries <br />
                        </td>
                        <td />
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td>
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                          PDF <br />
                        </td>
                        <td />
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

export default WipTable;
