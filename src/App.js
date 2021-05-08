import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import OptionsD from './components/OptionDoctor/OptionsD';
import TbAppointmentD from './components/TbAppointMentDoctor/TbAppointmentD';
import DetailUser from './components/Detailuser/DetailUser';
import RegisAdmin from './components/Register/RegisAdmin';
import AllAdmin from './components/AllAdmin/AllAdmin';

import Navbar from './components/Navbar/Navbar';
// import{BrowserRouter as Router,Route} from 'react-router-dom'

import { BrowserRouter as Router, Route , Switch}   from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header/> */}
      {/* <Login/>
     <Register/> */}
     {/* <OptionsD/> */}
     {/* <TbAppointmentD/> */}
     {/* <DetailUser/> */}
     <Header/>
     <Navbar/>
     <Switch>
     <Route path="/" component={AllAdmin} exact ={true}/>
     <Route path="/RegisAdmin" component={RegisAdmin} exact ={true}/>
     </Switch>




{/* 
    <Router exact path="/"> */}
         {/* <RegisAdmin/> */}
     {/* </Router> */}
{/* <AllAdmin/> */}

    </div>
 </Router>
  );
}

export default App;
