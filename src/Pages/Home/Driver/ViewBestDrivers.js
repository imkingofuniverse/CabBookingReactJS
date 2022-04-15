import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './ViewBestDrivers.css';
//import { Link, withRouter, useNavigate } from "react-router-dom";

// const viewBestDrivers = () => {
//   //const navigate = useNavigate();
//   const[drivers, setDrivers] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:9090/driver/bestdrivers").then((res) => {
//       setDrivers(res.data);
//       console.log(res.data);
//     });
//   }, []);


function ViewBestDrivers(){
  //const navigate = useNavigate();
  const[drivers, setDrivers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/driver/bestdrivers").then((res) => {
      setDrivers(res.data);
      console.log(res.data);
    });
  }, []);
  

  return (
    <div>
        <h1 className = "text-center">Best Drivers</h1>
        
    <div className = "best-drivers">
        
        <table className = "table table-stripped">
        <thead>
          <tr>
                <td>Driver ID</td>
                <td>Username</td>
                <td>Mobile No.</td>
                <td>Email</td>
                <td>Address</td>
                <td>License</td>
                <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => {
            return (
                <tr key = {driver.driverId}>
                    <td>{driver.driverId}</td>
                    <td>{driver.username}</td>
                    <td>{driver.mobilenumber}</td>
                    <td>{driver.email}</td>
                    <td>{driver.address}</td>
                    <td>{driver.licenceNo}</td>
                    <td>{driver.rating}</td>

            </tr>
            );
          })}
        </tbody>
      </table> 
      <div><br/>


      </div>
      </div>
    </div>
  );
};

export default ViewBestDrivers;