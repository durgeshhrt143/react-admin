import React from "react";
import Form from "../partial/form";
import Joi from "joi-browser";
import logo from "../../images/logo.png";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";
import login from "../../images/login.png";
class TwoStepverification extends Form {
  state = {
    data: { otp: "" },
    errors: {}
  };
  schema = {
    otp: Joi.string()
      .required()
      .label("Enter otp")
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
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="login-box-body">
              <div className="col-md-4">
                <img
                  src={login}
                  alt="logo"
                  style={{ maxWidth: "100%", marginBottom: 20 }}
                />
              </div>
              <p className="login-box-msg col-md-8" style={{ marginTop: 20 }}>
                A Text Message with your code has been sent to: *** *** **55
              </p>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("otp", "", "password")}

                <div className="text-right">{this.renderButton("Login")}</div>
              </form>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default TwoStepverification;
