import React, { Component } from "react";
import Authentication from "./../component/login/authentication";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/App.scss";

class App extends Component {
  state = {};
  render() {
    return <Authentication />;
  }
}

export default App;
