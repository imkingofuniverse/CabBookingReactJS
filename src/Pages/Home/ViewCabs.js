import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './ViewCabs.css';
import { Link, withRouter, useNavigate } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ViewCabs = () => {
  const navigate = useNavigate();
  const [cabs, setCabs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/cab/viewAllCabs").then((res) => {
      setCabs(res.data);
      console.log(res.data);
    });
  }, []);

  function trip() {
    navigate("/bookatrip");
  }

  return (
    <div>
        <h1 className = "text-center">Cab Details</h1>
        
    <div className = "cabdetails">
        
        <table className = "table table-stripped">
        <thead>
          <tr>
            
            <th>Cab Type</th><br/><br/>
            <th>Per Km Rate</th><br/><br/>
            
            <th>Driver Rating</th>
            <th>Book Here</th><br/><br/>
            
          </tr>
        </thead>
        <tbody>
          {cabs.map((cab) => {
            return (
                <tr key = {cab.cabId}>
                
                <td> {cab.carType}</td><br/><br/>
                <td> {cab.perKmRate}</td><br/><br/>
                <td>
                <FormControl className="ok">
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
  
            >
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"4.5"}>4.5</MenuItem>
              <MenuItem value={"4.8"}>4.8</MenuItem>
            </Select>
          </FormControl><br/><br/>
                </td>
                <td>
                <button 
      onClick={trip}
      variant="contained" 
      color="primary" 
      style={{marginTop:'1%',backgroundColor:'white',width:'20ch',height:'4ch',textDecorationColor:'ButtonHighlight'}} >
    
      Book A Trip
      
      </button>
      </td><br/><br/>

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

export default ViewCabs;