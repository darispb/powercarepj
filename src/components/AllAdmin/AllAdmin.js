import React, { Component } from "react";
import { BiCalendar } from "react-icons/bi";
import { RiUserSearchFill } from "react-icons/ri";

import "../OptionDoctor/OptionsD.css";

// import * as bi from "react-icons/bi";

class AllAdmin extends Component {
  render() {
    return (
      <div className="AllAdmin">
        <a href="#">
          <button className="btn btn-option-apm">
            <div className="logo-calendar">
              <BiCalendar />{" "}
            </div>
            เพิ่มบุคลากร
          </button>
        </a>
        <a href="#">
          <button className="btn btn-option-infor">
            <div className="logo-calendar">
            <BiCalendar />{" "}
            </div>
            จัดการตารางเวลา
          </button>
        </a>
        <a href="#">
          <button className="btn btn-option-apm">
            <div className="logo-calendar">
            <BiCalendar />{" "}
            </div>
            ตารางเวลา
          </button>
        </a>
      </div>
    );
  }
}
export default AllAdmin;
