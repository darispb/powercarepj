import React, { Component } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./Login.css";

export class Register extends Component {
  render() {
    return (
      <div className="Register">
        <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
        <span>
          <h3>ระบบ Admin สำหรับ PowerCare Clinic </h3>
        </span>
        <div className="Register">
          <from action="">
            <center>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Position"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            <button className="btn btn-sc1"> Register</button>
            </center>
          </from>
        </div>
      </div>
    );
  }
}

export default Register;
