import React from "react";
import { Link } from "react-router-dom";
const footer = props => {
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 2.4.0
      </div>
      <strong>
        Copyright © 2019-2020 <Link to="/">Audit Super</Link>.
      </strong>
      All rights reserved.
    </footer>
  );
};

export default footer;
