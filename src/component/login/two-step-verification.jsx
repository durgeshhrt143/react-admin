import React from "react";
import Form from "../partial/form";
import Joi from "joi-browser";
// import logo from "../../images/logo.png";
import Aux from "../../hoc/Aux";
// import { Link } from "react-router-dom";
// import login from "../../images/login.png";
class TwoStepverification extends Form {
  state = {
    data: { one: "", two: "", three: "", four: "" },
    errors: {}
  };
  schema = {
    one: Joi.string()
      .required()
      .label("First Number"),
    two: Joi.string()
      .required()
      .label("Second Number"),
    three: Joi.string()
      .required()
      .label("Three Number"),
    four: Joi.string()
      .required()
      .label("Four Number")
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
            <div className="login-box-body">
              <div className="col-md-12 text-center">
                <i
                  className="fa fa-mobile fa-color tada animated infinite"
                  aria-hidden="true"
                />
              </div>
              <p className="login-box-msg col-md-12" style={{ marginTop: 20 }}>
                A Text Message with your code has been sent to: *** *** **55
              </p>
              <form
                onSubmit={this.handleSubmit}
                className="twoStepVerivication"
              >
                {this.renderInput("one", "", "password")}
                {this.renderInput("two", "", "password")}
                {this.renderInput("three", "", "password")}
                {this.renderInput("four", "", "password")}
                <div className="text-right">{this.renderButton("OTP")}</div>
              </form>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default TwoStepverification;
