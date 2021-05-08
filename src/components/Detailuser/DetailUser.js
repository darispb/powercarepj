import React, { Component } from "react";
import "./DetailUser.css";

class DetailUser extends Component {
  render() {
    return (
      <div className="container-detail">
        <div className="profileus">
          <p>
            รหัสผู้ป่วย : <p1>A001</p1>
          </p>
          <p>
            ชื่อ-สกุล : สมชาย ใจดี &nbsp; เพศ : ชาย &nbsp; วัน/เดือน/ปีเกิด : 9
            กันยายน 2542
          </p>
          <p>
            ที่อยู่ : 1047 ถนนตากสิน ซอยตากสิน 22 แขวงบุคคโล เขตธนบุรี กรุงเทพ
            10600
          </p>
          <p>เบอร์โทร : 083-046-3915 &nbsp; e-mail : - </p>

          <div className="inforus">
            <p>ข้อมูลทำนัด : วันที่ 1/1/64 </p>
            <p>เวลา : 10.30-11.00</p>
            <p>แพทย์ที่พบ : สมรวย ฉลาดแฉลม </p>
          </div>
             <form>
          <div className="symtoms">
          <label className =" dt-flex">สรุปผลอาการ : </label> 
            <textarea className="form-control" placeholder="กรอกอาการ" rows="10"></textarea>
          </div>

            <button className="btn btn-add-medicine"> เพิ่มยา</button>

            <div className ="button-bt">
            <button className="btn btn-scsm" type="submit">บันทึกผล</button>
            <button className="btn btn-scsm" >ย้อนกลับ</button>
           
            </div>
            </form>
          


        </div>
      </div>
    );
  }
}
export default DetailUser;
