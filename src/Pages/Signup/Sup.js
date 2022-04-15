import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TxtField from "./TxtField";
import './Sup.css';
import axios from "axios";
import { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

/*const ui = (
  <div>
     <h1>Sign up</h1>
  <div className="sup">
   
    <Form id="signup">
      <TxtField label="Customer Id : " name="customerId" type="number" /><br/>
      <TxtField label="User Name : " name="userName" type="text" /><br/>
      <TxtField label="Mobile Number : " name="mobileNumber" type="number" /><br/>
      <TxtField label="Email : " name="email" type="email" /><br/>
      <TxtField label="Password : " name="password" type="password" /><br/>
      
      <TxtField
        label="Confirm Password : "
        name="confirmPassword"
        type="password"
      /><br/>
      <div className="submitbutton">
      <button type="submit">Register</button>
      </div>
    </Form>
    </div>
  </div>
);

function RegisterUser(values) {
  const userDetails = values;
  console.log(userDetails);
}

const Sup = () => {
  const validate = Yup.object({
    customerId: Yup.number().min(6, " mobile number should be 10 digits").required(),
    userName: Yup.string().required(),
    mobileNumber: Yup.number().required(),
    email: Yup.string().email().required(),
    
    password: Yup.string()
      .min(6, " password should be min 6 characters")
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password should match")
      .required(),
  });
  return (
    <Formik
      initialValues={{
        customerId: "",
        userName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        RegisterUser(values);
      }}
    >
      {(formik) => <div>{ui}</div>}
    </Formik>
  );
};

export default Sup; */

function Sup(){
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[mobile,setMobile]=useState("");
  const[customerId,setCustomerId]=useState("");
  const[email,setEmail]=useState("");
  const navigate = useNavigate();
  function usersignup(){
    let resbody={
      customerId:customerId,
      username : userName,
      password:password,
      mobileNumber: mobile,
      email: email,
    }
    axios.post("http://localhost:9090/customer/insertCustomer",resbody).then((res)=>console.log(" Registration successfull"));
  }
  function registrationdone() {
    navigate("/registrationdone");
    usersignup();
  }
  return(
    <div>
      <h1>Sign Up</h1>
    
    <div className="supc">
      
      <label>Customer Id : </label>
      <input label="Customer Id : " name="customerId" type="number" onChange={(e)=>{setCustomerId(e.target.value)}} />
      <br/>
      <br/>
      <label>User Name : </label>
      <input label="User Name : " name="userName" type="text" onChange={(e)=>{setUserName(e.target.value)}} />
      <br/>
      <br/>
      <label>Mobile Number : </label>
      <input label="Mobile Number : " name="mobileNumber" type="number" onChange={(e)=>{setMobile(e.target.value)}}/>
      <br/>
      <br/>
      <label>Email : </label>
      <input label="Email : " name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      <br/>
      <label>Password : </label>
      <input label="Password : " name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>    
      <br/>
      <br/>
      <div className="submitbutton">
       <button type="submit" onClick={registrationdone}>Register</button>
      </div>
    </div>
    </div>
  );
}
export default Sup;