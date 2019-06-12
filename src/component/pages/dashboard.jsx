import React, { Component } from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Aux from "../../hoc/Aux";
import TaskChart from "./../graph/task-chart";
import FundProgressChart from "./../graph/fund-progress-chart";
import Calender from "../partial/calender";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverusages1: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul"],
        datasets: [
          {
            label: "Download",
            data: [60, 90, 40, 70, 50, 60, 70, 30],
            backgroundColor: [
              "#52a0e0",
              "#52a0e0",
              "#52a0e0",
              "#52a0e0",
              "#52a0e0",
              "#52a0e0",
              "#52a0e0",
              "#52a0e0"
            ]
          }
        ]
      },
      fundprogress: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul"],
        datasets: [
          {
            label: "Jan",
            data: [60, 90, 40, 70, 50, 60, 70, 30],
            backgroundColor: [
              "#7e797d",
              "#f7010e",
              "#f54547",
              "#60b154",
              "#afa7a4",
              "#f1eb57",
              "#86c7d9",
              "#f9983a"
            ]
          }
        ]
      },
      taskupdate: {
        labels: ["In Progress", "Queries", "Final Review"],
        datasets: [
          {
            data: [250, 100, 50],
            backgroundColor: ["#f1e85f", "#5db14f", "#f89339"]
          }
        ]
      },
      serversages2: {
        labels: ["Download", "Upload"],
        datasets: [
          {
            data: [250, 100, 50],
            backgroundColor: ["#40a4ef", "#f44763", "#eaebed"]
          }
        ]
      }
    };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#000";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <Aux>
        <section className="content-header">
          <h1>Dashboard</h1>
          <Breadcrumb breadcrumb="Dashboard" />
        </section>
        <section className="content dashboard">
          <div className="row">
            <div className="col-md-7 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "350px" }}>
                <div className="box-header with-border">
                  <h3 className="box-title">
                    <div className="row">
                      <span className="col-md-5">Fund Progress Overview</span>
                      <span className="col-md-3 year">15 Feb 2019</span>
                      <div className="col-md-4 text-right dateTime">
                        <span>
                          Date
                          <i className="fa fa-angle-down" />
                        </span>
                        <span>
                          Month
                          <i className="fa fa-angle-down" />
                        </span>
                        <span>
                          Year
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                    </div>
                  </h3>

                  <div className="text-right" style={{ marginTop: 15 }}>
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <FundProgressChart data={this.state.fundprogress} />
                  </div>
                </div>
              </div>
            </div>
            <div className="padding col-md-5 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "350px" }}>
                <div className="box-header with-border">
                  <h3 className="box-title">Task/Today's Update</h3>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <TaskChart data={this.state.taskupdate} />
                    <div className="text-center">
                      <a href="" className="view-more">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-aqua">
                <div className="inner text-right">
                  <p>Total Funds</p>
                  <h3>150</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner text-right">
                  <p>Total Firms</p>
                  <h3>53</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner text-right">
                  <p>Total Users</p>
                  <h3>44</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-user" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner text-right">
                  <p>WIP</p>
                  <h3>65</h3>
                </div>
                <div className="icon">
                  <i className="fa fa-pie-chart" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "400px" }}>
                <div className="box-header">
                  <h3 className="box-title">User Management</h3>
                  <div className="text-right">
                    <button className="btn btn-primary">
                      <i
                        className="fa-plus fa"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      />
                      Add New User
                    </button>
                  </div>
                </div>

                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th width="25%">Name</th>
                        <th width="25%">Role</th>
                        <th width="25%">IP Address</th>
                        <th width="25%">Setting</th>
                      </tr>
                      <tr>
                        <td>
                          <span className="flag">
                            <span className="name bgColorFirst">DS</span>
                            <span className="online" />
                          </span>
                          Durgesh
                        </td>
                        <td>Admin</td>
                        <td>123.123.123.123</td>

                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" onClick={this.openModal} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="flag">
                            <span className="name bgColorSecond">DS</span>
                            <span className="offline" />
                          </span>
                          Durgesh
                        </td>
                        <td>Admin</td>
                        <td>123.123.123.123</td>

                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="flag">
                            <span className="name bgColorThird">DS</span>
                            <span className="online" />
                          </span>
                          Durgesh
                        </td>
                        <td>Admin</td>
                        <td>123.123.123.123</td>

                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="flag">
                            <span className="name bgColorFour">DS</span>
                            <span className="offline" />
                          </span>
                          Durgesh
                        </td>
                        <td>Admin</td>
                        <td>123.123.123.123</td>

                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="padding col-md-5 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "400px" }}>
                <div className="box-header with-border">
                  <h3 className="box-title">Latest Updates</h3>
                </div>

                <div className="box-body">
                  <ul className="products-list product-list-in-box">
                    <li className="item">
                      <div className="product-img">
                        <span className="latestUpdateIcon bgColorFirst">
                          <i className="fa fa-file-text-o" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="product-info">
                        <a
                          href="javascript:void(0)"
                          className="product-title auditsheet"
                        >
                          Audit Sheet
                        </a>
                        <span className="product-description">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </span>
                      </div>
                    </li>
                    <li className="item">
                      <div className="product-img">
                        <span className="latestUpdateIcon bgColorSecond">
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="product-info">
                        <a
                          href="javascript:void(0)"
                          className="product-title messagefromclient"
                        >
                          Message From Client
                        </a>
                        <span className="product-description">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </span>
                      </div>
                    </li>
                    <li className="item">
                      <div className="product-img">
                        <span className="latestUpdateIcon bgColorThird">
                          <i className="fa fa-user-o" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="product-info">
                        <a
                          href="javascript:void(0)"
                          className="product-title internalusers"
                        >
                          Internal Users
                        </a>
                        <span className="product-description">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </span>
                      </div>
                    </li>
                    <li className="item">
                      <div className="product-img">
                        <span className="latestUpdateIcon bgColorFirst">
                          <i className="fa fa-file-text-o" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="product-info">
                        <a
                          href="javascript:void(0)"
                          className="product-title auditsheet"
                        >
                          Audit Sheet
                        </a>
                        <span className="product-description">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className="box-footer"
                  style={{ textAlign: "left", marginLeft: 36 }}
                >
                  <a href="javascript:void(0)" className="uppercase">
                    Load More+
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">Task Management</h3>
                </div>

                <div
                  className="box-body table-responsive no-padding "
                  style={{ overflowY: "Auto", height: "380px" }}
                >
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="open circle" />
                          Open
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="on-hold circle" />
                          On Hold
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="on-hold circle" />
                          On Hold
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="on-hold circle" />
                          On Hold
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="on-hold circle" />
                          On Hold
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="open circle" />
                          Open
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="open circle" />
                          Open
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="open circle" />
                          Open
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                      <tr>
                        <td>9999999999</td>
                        <td>AAA</td>
                        <td>abc</td>
                        <td>2017</td>
                        <td>
                          <span className="inprogress circle" />
                          In Progress
                        </td>
                        <td>Durgesh Singh</td>
                        <td>
                          <a href="" className="dashboardAnchor">
                            ...
                          </a>
                          <i className="fa fa-edit" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "350px" }}>
                <div className="box-header with-border">
                  <h3 className="box-title">
                    <div className="row">
                      <span className="col-md-6">Server Usages 1</span>

                      <div className="col-md-6 text-right dateTime">
                        <span>
                          Month
                          <i className="fa fa-angle-down" />
                        </span>
                        <span>
                          Year
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                    </div>
                  </h3>

                  <div className="text-right" style={{ marginTop: 15 }}>
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="chart">
                    <FundProgressChart data={this.state.serverusages1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="padding col-md-5 col-sm-6 col-xs-12">
              <div className="box box-primary" style={{ height: "350px" }}>
                <div className="box-header with-border">
                  <h3 className="box-title">
                    <div className="row">
                      <span className="col-md-6">Server Usages 2</span>

                      <div className="col-md-6 text-right dateTime">
                        <span>
                          Month
                          <i className="fa fa-angle-down" />
                        </span>
                        <span>
                          Year
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                    </div>
                  </h3>

                  <div className="text-right" style={{ marginTop: 15 }}>
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
                <div className="box-body" style={{ marginTop: 20 }}>
                  <TaskChart data={this.state.serversages2} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div ref={subtitle => (this.subtitle = subtitle)}>
            <div className="modal-header">
              <button type="button" className="close" onClick={this.closeModal}>
                ×
              </button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </Aux>
    );
  }
}

export default Dashboard;
