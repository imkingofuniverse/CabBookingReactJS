import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
//import { Button } from 'react-bootstrap';
import styles from "./Background.css";
import { Button } from "@material-ui/core";
import Sup from "../Signup/Sup";

function Background(){
  const navigate = useNavigate();
  function HomeCustomer(){
    navigate("/login");
  }
  function Homedriver(){
    navigate("/driverlogin");
  }
  function dsignup(){
    navigate("/driversignup");
  }
  function csignup(){
    navigate("/signup");
  }
  return(
    <div>
      <div className="left">
        <img src="https://thumbs.dreamstime.com/b/happy-family-trip-taxi-service-illustration-summer-mother-father-son-daughter-standing-luggage-city-street-parents-148538451.jpg" alt="no car displayed"
        width={400} height={300}></img>
      </div>
      <div className="right">
        <h1>Driver</h1>
        <p>We offer fruitful experience with our well-trained drivers. not just in driving but also in communication and hospitality. Hope you enjoy your ride with our captains!! 

        </p>
        <Button color="primary" variant="contained" onClick={Homedriver}>Login</Button>
        <Button color="primary" variant="contained" onClick={dsignup}>Signup</Button>
      </div>
      <div className="bottom-right">
        <img src="https://vaigaicabs.com/wp-content/uploads/sites/373/2021/06/Airport-taxi-1.jpg" alt="no car displayed"
        width={400} height={300}></img>
      </div>
      <div className="bottom-left">
        <h1>Customer</h1>
        <p>We offer the best cab operators and drivers for every prime location of India to make your journey hassle-free. We provide cabs including Hatchback, sedan, SUV, and many more. 

        </p>
        <Button color="primary" variant="contained" onClick={HomeCustomer} >Login</Button>
        <Button color="primary" variant="contained" onClick={csignup} >Signup</Button>
      </div>
    </div>
  );
}

export default Background;