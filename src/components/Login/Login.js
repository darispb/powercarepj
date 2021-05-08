import React, { Component } from "react";
import Powercarepic from "../../img/Powerpuff.png";
import "./Login.css";

// import {Link} from 'react-router-dom'

export class Login extends Component {
  render() {
    return (
      <div className="container fixed-container mb-3">
        <div className="head-register">
          <img src={Powercarepic} alt="Powercare" className="Powercarepic" />
          <h2>Power Care Clinic </h2>
        </div>
        <div className="login">
          <from action="">
            <center>
              <div className="mb-3-login">
                <label for="doctor-name"> Email : </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3-login">
                <label for="doctor-name"> Password : </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button className="btn btn-sc"> Login Doctor</button>
              <span class="btn-round"> Or </span>
              <button className="btn btn-sc1"> Login Admin</button>
            </center>
          </from>
        </div>
      </div>
    );
  }
}

export default Login;
