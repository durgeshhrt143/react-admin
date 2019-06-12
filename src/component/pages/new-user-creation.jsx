import React, { Component } from "react";
import Breadcrumb from "./../layout/breadcrumb";
import Form from "./../partial/form";
import Aux from "../../hoc/Aux";
import Joi from "joi-browser";
class NewUserCreation extends Form {
  state = {
    selectoptions: [
      { id: 0, name: "Choose.." },
      { id: 1, name: "Accountant" },
      { id: 2, name: "Auditor" },
      { id: 3, name: "Client" }
    ],
    data: {
      firstName: "",
      contactNumber: "",
      password: "",
      lastName: "",
      emailId: "",
      birthDate: "",
      confirmPassword: "",
      selectType: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    contactNumber: Joi.string()
      .required()
      .label("Contact Number"),
    password: Joi.string()
      .required()
      .label("Password"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    emailId: Joi.string()
      .required()
      .label("email Id"),
    birthDate: Joi.string()
      .required()
      .label("Birth Date"),
    confirmPassword: Joi.string()
      .required()
      .label("Confirm Password"),
    selectType: Joi.string()
      .required()
      .label("Select Type")
  };
  doSubmit = () => {
    console.log("new user created");
  };
  render() {
    return (
      <Aux>
        <section className="content-header">
          <h1>New User Creation</h1>
          <Breadcrumb breadcrumb="New User Creation" />
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3>
                    <div className="row">
                      <div className="col-md-8">
                        Please fill following details
                      </div>
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn btn-primary pull-right"
                        >
                          All User List
                        </button>
                      </div>
                    </div>
                  </h3>
                </div>
                <div className="box-body">
                  <div className="col-12 sBox">
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          {this.renderInput("firstName", "First Name")}
                          {this.renderInput("contactNumber", "Contact Number")}
                          {this.renderSelect(
                            "selectType",
                            "Select Type",
                            this.state.selectoptions
                          )}
                          {this.renderInput("password", "Password", "password")}
                        </div>
                        <div className="col-sm-6">
                          {this.renderInput("lastName", "Last Name")}
                          {this.renderInput("emailId", "Email Id", "email")}
                          {this.renderInput("birthDate", "Birth Date", "date")}
                          {this.renderInput(
                            "confirmPassword",
                            "Confirm Password",
                            "password"
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Select permissions</label>
                          </div>
                          <div className="col-md-2">
                            <label>R</label>
                          </div>
                          <div className="col-md-2">
                            <label>W</label>
                          </div>
                          <div className="col-md-2">
                            <label>F</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="row">
                          <div className="col-md-6" />
                          <div className="col-md-2">
                            <label>R</label>
                          </div>
                          <div className="col-md-2">
                            <label>W</label>
                          </div>
                          <div className="col-md-2">
                            <label>F</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Add Firms
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Add Funds
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Edit Funds
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Renaming Funds
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                WIP
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Change Password
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                View all funds in system - Addition/upload of
                                Documents
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Status Change
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Audit Allocation
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Reviewer Allocation
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Audit Sheet Lock
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Audit Sheet Edit
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Full access
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-check form-check-inline">
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox2"
                              >
                                Addition/Modification of New Firm/Auditor
                              </label>
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox2"
                                defaultValue="option2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttongroup">
                      <button
                        type="button"
                        disabled={this.validate()}
                        className="btn btn-primary"
                        onClick={this.doSubmit}
                        style={{ marginRight: 5 }}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ marginRight: 5 }}
                      >
                        Reset
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default NewUserCreation;
