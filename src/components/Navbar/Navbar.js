import React ,{Component }from 'react';
import Navitems from './Navitems'
import "./Navbar.css";
import Admin from "../../img/Admin.png";
import { Link } from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }


    render() {
        return (

            <div className="navbar">
                    <center>
                    <img src={Admin} alt="" className="Admin" />
                    <h4> Darisss </h4>
                    </center>
                    <Link to ="/"> <i class="fas fa-home"></i><span>หน้าหลัก</span></Link>
                    <Link to ="/RegisAdmin"><i class="fas fa-user-plus"></i><span>เพิ่มบุคลากร</span></Link>
                    <a href="#"> <i class="far fa-calendar-plus"></i><span>จัดการตารางเวลา</span></a>
                    <a href="#"> <i class="fas fa-calendar-check"></i><span>ตารางเวลาการทำนัด</span></a>
                    </div>
        )
    }
}

export default Navbar;