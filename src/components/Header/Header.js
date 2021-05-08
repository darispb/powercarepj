import React ,{Component }from 'react';
import PowercareD from '../../img/Powerpuff.png';
import "./Header.css";

class Header extends Component{
    render(){
        return(
        //     <div className="Header">
        //         <div className="container">
        //         <div class="header-con">
        //             <div clasname ="logo-container">
        //                 <a href="#"> <img src ={PowercareD} alt="Powercare" className="PowercareD"/></a> 
        //                 <a>ระบบ Admin สำหรับ PowerCare Clinic</a>
        //             <ul className="menu">
        //                 <li className="menu-link">
        //                     <a> Somying 555</a> 
        //                 </li>
        //                 <li className="menu-link">
        //                     <a href = "#"> การแจ้งเตือน</a> 
        //                 </li>
        //                 <li className="menu-link">
        //                     <a href = "#"> ลงชื่อออก</a> 
        //                 </li>
        //             </ul>  
        //             </div>
        //         </div>
        //         </div>
        //   </div>
            
            <div className="Header">
                <div className="container-header">
                    
                <div className="left_area">
            <h3> Powercare <span>Clinic</span></h3>  
            </div>
            <div className="right_area">
                <a href ="#" className="logout_btn"> <i class="fas fa-sign-out-alt"></i>logout </a>
                <a href ="#" className="logout_btn"><i class="fas fa-bell"></i> การแจ้งเตือน </a>
                </div>
                </div>
            </div>







        )
    }
}
export default Header;