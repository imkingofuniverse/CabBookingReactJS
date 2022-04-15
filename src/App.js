//import logo from './logo.svg';
/*import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App; */

//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import DriverLogin from "./Pages/Login/DriverLogin";
import Signup from "./Pages/Signup/Signup";
import Failure from "./Pages/Failure/failure";
import Home from "./Pages/Home/Home";
import CabComponent from "./Pages/Home/CabComponent";
import ViewCabs from "./Pages/Home/ViewCabs";
import Sup from "./Pages/Signup/Sup";
import DriverSignUp from "./Pages/Signup/DriverSignUp";
import DriverFunction from "./Pages/Home/Driver/DriverFunction";
import ViewAllDrivers from "./Pages/Home/Driver/ViewAllDrivers";
import ViewBestDrivers from "./Pages/Home/Driver/ViewBestDrivers";

import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import BookATrip from "./Pages/Home/BookATrip";
import CustomerFunctions from "./Pages/Home/CustomerFunctions";
import ViewRoutes from "./Pages/Home/ViewRoutes";
import CabArriving from "./Pages/Home/CabArriving";
import PageUnderConstruction from "./Pages/Home/PageUnderConstruction";
import GetTripDetails from "./Pages/Home/GetTripDetails";
import HomePage from "./Pages/Home/HomePage";
import RegistrationDone from "./Pages/Home/RegistrationDone";
import Background from "./Pages/Home/Background";
//import LoginAs from "./Pages/Login/LoginAs";

function App() {
  return (
    <div>
      
      <AppBar style={{ backgroundColor:'black'}} position="static">
      <Toolbar>
      <Typography variant="h6" style={{fontFamily:'Montserrat,sans-serif'}}>
        <h3 font face="Arial">Cab Booking Application</h3>
        
        <p id="tagline">Thinking of going Somewhere?... No problem we got you covered..</p>
      </Typography>
      </Toolbar>
      </AppBar>
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" element={<Sup />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/home" element={<Home />} />
      
          <Route path="/viewcabs" element={<ViewCabs />} />
          <Route path="/bookatrip" element={<BookATrip />} />
          <Route path="/customerfunctions" element={<CustomerFunctions />} />
          <Route path="/viewroutes" element={<ViewRoutes />} />
          <Route path="/cabarriving" element={<CabArriving />} />
          <Route path="/pageunderconstruction" element={<PageUnderConstruction />} />
          <Route path="/gettripdetails" element={<GetTripDetails />} />
          <Route path="/registrationdone" element={<RegistrationDone />} />
          <Route path="/" element={<Background />} />
          <Route path="/driverlogin" exact element={<DriverLogin />} />
          <Route path="/driversignup" element={<DriverSignUp />} />

          <Route path="/alldrivers" element={<ViewAllDrivers />} />
          <Route path="/bestdrivers" element={<ViewBestDrivers />} />
          <Route path="/Driverfunction" element={<DriverFunction />} />
          

        </Routes>
      </BrowserRouter>

      
      </div>

    </div>
  );
}

export default App;
