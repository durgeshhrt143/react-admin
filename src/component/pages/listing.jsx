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
        <h1>Total Firms(26)</h1>
        <Breadcrumb breadcrumb="Firms" />
      </section>
      <ul className="list-unstyled listingPage">
        <li className="col-md-3 listCon">
          <div className="profile">
            <Link to="/" className="setting">
              <em>
                <i className="fa fa-cog" aria-hidden="true" />
              </em>
            </Link>
            <figure className="listFigure">
              <img className="img-responsive" src={google} alt="google" />
            </figure>
            <strong>Durgesh</strong>
          </div>
          <div className="postBlock">
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Users</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Posts</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <div className="profile">
            <Link to="/" className="setting">
              <em>
                <i className="fa fa-cog" aria-hidden="true" />
              </em>
            </Link>
            <figure className="listFigure">
              <img className="img-responsive" src={google} alt="google" />
            </figure>
            <strong>Durgesh</strong>
          </div>
          <div className="postBlock">
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Users</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Posts</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <div className="profile">
            <Link to="/" className="setting">
              <em>
                <i className="fa fa-cog" aria-hidden="true" />
              </em>
            </Link>
            <figure className="listFigure">
              <img className="img-responsive" src={google} alt="google" />
            </figure>
            <strong>Durgesh</strong>
          </div>
          <div className="postBlock">
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Users</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Posts</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <div className="profile">
            <Link to="/" className="setting">
              <em>
                <i className="fa fa-cog" aria-hidden="true" />
              </em>
            </Link>
            <figure className="listFigure">
              <img className="img-responsive" src={google} alt="google" />
            </figure>
            <strong>Durgesh</strong>
          </div>
          <div className="postBlock">
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Users</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Posts</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
          </div>
        </li>
        <li className="col-md-3 listCon">
          <div className="profile">
            <Link to="/" className="setting">
              <em>
                <i className="fa fa-cog" aria-hidden="true" />
              </em>
            </Link>
            <figure className="listFigure">
              <img className="img-responsive" src={google} alt="google" />
            </figure>
            <strong>Durgesh</strong>
          </div>
          <div className="postBlock">
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Users</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
            <div className="postBlockSeperator">
              <span>10</span>
              <span>Posts</span>
              <Link to="/">
                <em>
                  <i className="fa fa-plus" aria-hidden="true" />
                </em>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </Aux>
  );
};

export default Listing;
