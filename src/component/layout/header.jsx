import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user2-160x160.jpg";
import logo from "../../images/logo.png";
const Header = props => {
  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <nav className="navbar navbar-static-top">
        <button className="sidebar-toggle" data-toggle="push-menu">
          <span className="sr-only">Toggle navigation</span>
        </button>
        <form className="sidebar-form">
          <span className="input-group-btn">
            <button
              type="button"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
          <div className="input-group">
            <input
              type="text"
              name="q"
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o" />
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a>
                        <div className="pull-left">
                          <img
                            src={user}
                            className="img-circle"
                            alt="profile"
                          />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void(0)">
                        <div className="pull-left">
                          <img
                            src={user}
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Auidit Team
                          <small>
                            <i className="fa fa-clock-o" /> 2 hours
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src={user}
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Developers
                          <small>
                            <i className="fa fa-clock-o" /> Today
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src={user}
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Sales Department
                          <small>
                            <i className="fa fa-clock-o" /> Yesterday
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src="dist/img/user4-128x128.jpg"
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Reviewers
                          <small>
                            <i className="fa fa-clock-o" /> 2 days
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members
                        joined today
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-warning text-yellow" /> Very long
                        description here that may not fit into the page and may
                        cause design problems
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-red" /> 5 new members
                        joined
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart text-green" /> 25
                        sales made
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-red" /> You changed your
                        username
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>

            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={user} className="user-image" alt="User Image" />
                <span className="hidden-xs">Durgesh Singh</span>
                <i
                  className="fa fa-angle-down"
                  style={{ marginLeft: 5, fontWeight: 800 }}
                />
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src={user} className="img-circle" alt="User Image" />
                  <p>
                    Durgesh Singh - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>

                <li className="user-footer">
                  <div className="pull-left">
                    <a href="#" className="btn btn-default btn-flat">
                      Profile
                    </a>
                  </div>
                  <div className="pull-right">
                    <a href="#" className="btn btn-default btn-flat">
                      Sign out
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
