import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/google.png";
import bg from "../../images/bg.jpg";
import Aux from "./../../hoc/Aux";
import Breadcrumb from "../layout/breadcrumb";
const Listing = props => {
  return (
    <Aux>
      <section className="content-header">
        <h1>Firm(26)</h1>
        <Breadcrumb breadcrumb="Firm" />
      </section>
      <ul className="list-unstyled listingPage">
        <li className="col-md-3 listCon">
          <span className="listConBg">
            <img src={bg} alt="background" className="img-responsive" />
          </span>
          <figure className="listFigure">
            <img className="img-responsive" src={google} alt="google" />
          </figure>
          <div className="ProfileCard-content text-center">
            <div>
              <Link className="fullname" to="/">
                Aeon 1
              </Link>
            </div>
            <span className="ProfileCard">
              <div className="userBlock">
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-users" aria-hidden="true" />
                    Users
                  </span>
                </div>
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-align-left" aria-hidden="true" />
                    Funds
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="follow">
            <Link to="/">
              <i className="fa fa-pencil-square" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-trash-o" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-key" aria-hidden="true" />
            </Link>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <span className="listConBg">
            <img src={bg} alt="background" className="img-responsive" />
          </span>
          <figure className="listFigure">
            <img className="img-responsive" src={google} alt="google" />
          </figure>
          <div className="ProfileCard-content text-center">
            <div>
              <Link className="fullname" to="/">
                Aeon 1
              </Link>
            </div>
            <span className="ProfileCard">
              <div className="userBlock">
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-users" aria-hidden="true" />
                    Users
                  </span>
                </div>
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-align-left" aria-hidden="true" />
                    Funds
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="follow">
            <Link to="/">
              <i className="fa fa-pencil-square" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-trash-o" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-key" aria-hidden="true" />
            </Link>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <span className="listConBg">
            <img src={bg} alt="background" className="img-responsive" />
          </span>

          <figure className="listFigure">
            <img className="img-responsive" src={google} alt="google" />
          </figure>
          <div className="ProfileCard-content text-center">
            <div>
              <Link className="fullname" to="/">
                Aeon 1
              </Link>
            </div>
            <span className="ProfileCard">
              <div className="userBlock">
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-users" aria-hidden="true" />
                    Users
                  </span>
                </div>
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-align-left" aria-hidden="true" />
                    Funds
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="follow">
            <Link to="/">
              <i className="fa fa-pencil-square" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-trash-o" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-key" aria-hidden="true" />
            </Link>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <span className="listConBg">
            <img src={bg} alt="background" className="img-responsive" />
          </span>
          <figure className="listFigure">
            <img className="img-responsive" src={google} alt="google" />
          </figure>
          <div className="ProfileCard-content text-center">
            <div>
              <Link className="fullname" to="/">
                Aeon 1
              </Link>
            </div>
            <span className="ProfileCard">
              <div className="userBlock">
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-users" aria-hidden="true" />
                    Users
                  </span>
                </div>
                <div>
                  <strong className="count">
                    <em>10</em>
                    <Link to="/">
                      <em>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                      </em>
                    </Link>
                  </strong>
                  <span className="listFund">
                    <i className="fa fa-align-left" aria-hidden="true" />
                    Funds
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="follow">
            <Link to="/">
              <i className="fa fa-pencil-square" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-trash-o" aria-hidden="true" />
            </Link>
            <Link to="/">
              <i className="fa fa-key" aria-hidden="true" />
            </Link>
          </div>
        </li>
      </ul>
    </Aux>
  );
};

export default Listing;
