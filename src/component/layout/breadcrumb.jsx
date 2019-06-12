import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = props => {
  return (
    <ol className="breadcrumb">
      <li>
        <Link to="/">
          <i className="fa fa-home" /> Home
        </Link>
      </li>
      <li className="active">{props.breadcrumb}</li>
    </ol>
  );
};

export default Breadcrumb;
