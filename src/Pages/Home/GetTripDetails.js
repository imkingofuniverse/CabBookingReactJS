import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './GetTripDetails.css';
import { Link, withRouter, useNavigate } from "react-router-dom";

const GetTripDetails = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/tripbooking/viewAllTrips").then((res) => {
      setTrips(res.data);
      console.log(res.data);
    });
  }, []);

  function trip() {
    navigate("/bookatrip");
  }

  return (
    <div>
        <h1 className = "text-center">Trip Details</h1>
        
    <div className = "tripdetails">
        
        <table className = "table table-stripped">
        <thead>
          <tr>
            
            <th>Trip Booking Id</th><br/><br/>
            <th>From Location</th><br/><br/>
            <th>To Location</th><br/><br/>
          </tr>
        </thead>
        <tbody>
          {trips.map((tripbooking) => {
            return (
                <tr key = {tripbooking.tripBookingId}>
                
                <td> {tripbooking.tripBookingId}</td><br/><br/>
                <td> {tripbooking.fromLocation}</td><br/><br/>
                <td> {tripbooking.toLocation}</td><br/><br/>

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

export default GetTripDetails;