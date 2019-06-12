import React from "react";
import Form from "../partial/form";
import Joi from "joi-browser";
import logo from "../../images/logo.png";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";
class LoginForm extends Form {
  state = {
    data: { login: "", password: "" },
    errors: {}
  };
  schema = {
    login: Joi.string()
      .required()
      .label("Login"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    this.props.history.push("/");
    console.log("submitted");
  };

  render() {
    return (
      <Aux>
        <div className="loginCon">
          <div className="col-md-offset-4 col-md-4 line-height-center bg">
            <div className="login-logo">
              <h1 className="login-box-msg">Great to see you again!</h1>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="login-box-body">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("login", "")}
                {this.renderInput("password", "", "password")}
                <div className="text-right">{this.renderButton("Login")}</div>
                <p>
                  <Link to="/" className="pull-left">
                    Forgot Password?
                  </Link>
                  <span className="pull-right">
                    No account yet? <Link to="/">Sign up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default LoginForm;
