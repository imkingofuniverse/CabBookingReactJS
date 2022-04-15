import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link, withRouter, useNavigate } from "react-router-dom";

import { useEffect} from "react";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '30ch',
    },
    selectEmpty: {
      marginTop: theme.spacing(255),
    },
  }));
  
function BookATrip() {
    const classes = useStyles();
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [dateandtime1, setDateandtime1] = useState('');
    const [dateandtime2, setDateandtime2] = useState('');
    const navigate = useNavigate();

    function cabBook(){
      let res={
          fromLocation:location1,
          toLocation:location2,
          fromLocalDateTime:dateandtime1,
          toLocalDateTime:dateandtime2,
      }
      axios.post("http://localhost:9090/tripbooking/insert",res).then((res)=>console.log("Booking successfull"));
  }
  
    const handleChange1 = (event) => {
      setLocation1(event.target.value);
    };
    const handleChange2 = (event) => {
      setLocation2(event.target.value);
    };
    const handleChange3 = (event) => {
      setDateandtime1(event.target.value);
    };
    const handleChange4 = (event) => {
      setDateandtime2(event.target.value);
    };

    function viewcabs() {
        navigate("/viewcabs");
      }
      function cabarriving() {
        navigate("/cabarriving");
        cabBook();
      }
    return (
        <div align="center" style={{borderRadius: '5px',backgroundColor:'white',marginTop:'10%', marginLeft:'25%', marginRight:'25%',paddingTop:'1.5%',paddingBottom:'1.5%',boxShadow:'2px 2px #888888'}}>
            <h2>Book Your Trip</h2>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Departure From</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location1}
              onChange={handleChange1}
            >
              <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
              <MenuItem value={"Banglore"}>Banglore</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Chennai"}>Chennai</MenuItem>
            </Select>
          </FormControl> 
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Arrival To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location2}
              onChange={handleChange2}
            >
              <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
              <MenuItem value={"Banglore"}>Banglore</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Chennai"}>Chennai</MenuItem>
            </Select>
          </FormControl><br/>
          <form className={classes.container} noValidate>
    <TextField
      id="datetime-local"
      label="FromDate"
      type="datetime-local"
      defaultValue="2022-04-14T10:30"
      className={classes.formControl}
     
      InputLabelProps={{
        shrink: true,
      }}
    />
    <TextField
      id="datetime-local"
      label="ToDate"
      type="datetime-local"
      defaultValue="2022-04-16T10:30"
      className={classes.formControl}
     
      InputLabelProps={{
        shrink: true,
      }}
    /><br/><br/>
    <Button
    //onClick={cabBook}
    onClick={cabarriving}
    variant="contained" 
    color="primary" 
    style={{backgroundColor:'black',width:'35ch'}} >
      
      Book Now
      
      </Button>
      
      <br/>
  </form>
  <Button
    onClick={viewcabs}
    variant="contained" 
    color="primary" 
    style={{marginTop:'1%',backgroundColor:'black',width:'35ch'}} >
      
      Back
      
      </Button>
     
      <br/>
  
        </div>
      );
  }
  
  export default BookATrip