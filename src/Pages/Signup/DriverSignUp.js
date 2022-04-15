import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import TxtField from "./TxtField";
import './DriverSignUp.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp(){
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[mobile,setMobile]=useState("");
  const[driverId,setDriverId]=useState("");
  const[email,setEmail]=useState("");
  const[licenceNo,setLicenceNo]=useState("");
  const[rating,setRating]=useState("");
  const[address,setAddress]=useState("");
  

  const navigate = useNavigate();
  function usersignup(){
    let resbody={
      driverId:driverId,
      username : userName,
      password:password,
      mobilenumber: mobile,
      email: email,
      licenceNo: licenceNo,
      rating: rating,
      address: address,
    }
    axios.post("http://localhost:9090/driver/insert",resbody).then((res)=>console.log(" Registration successfull"));
  }
  function registrationdone() {
    navigate("/Driverfunction");
    usersignup();
  }
  return(
    <div>
      <h1>Sign Up</h1>
    
    <div className="sup">
      
      <label>Driver Id : </label>
      <input label="Driver Id : " name="driverId" type="number" onChange={(e)=>{setDriverId(e.target.value)}} />
      <br/>
      <br/>
      <label>User Name : </label>
      <input label="User Name : " name="userName" type="text" onChange={(e)=>{setUserName(e.target.value)}} />
      <br/>
      <br/>
      <label>Password : </label>
      <input label="Password : " name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>    
      <br/>
      <br/>
      <label>Mobile Number : </label>
      <input label="Mobile Number : " name="mobilenumber" type="number" onChange={(e)=>{setMobile(e.target.value)}}/>
      <br/>
      <br/>
      <label>Email : </label>
      <input label="Email : " name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      
      <br/>
      <label>License No : </label>
      <input label="License No : " name="licenseNo" type="licenseNo" onChange={(e)=>{setLicenceNo(e.target.value)}}/>
      <br/>
      <br/>
      <label>Rating : </label>
      <input label="Rating : " name="rating" type="rating" onChange={(e)=>{setRating(e.target.value)}}/>
      <br/>
      <br/>
      <label>Address : </label>
      <input label="Address : " name="address" type="address" onChange={(e)=>{setAddress(e.target.value)}}/>
      <br/>
      <br/>
      <div className="submitbutton">
       <button type="submit" onClick={registrationdone}>Register</button>
      </div>
    </div>
    </div>
  );
}
export default SignUp;