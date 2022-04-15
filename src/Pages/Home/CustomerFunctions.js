import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
//import RouterDom from './RouterDom';
import { Link, withRouter, useNavigate } from "react-router-dom";
import './CustomerFunctions.css';

function CustomerFunctions() {
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState('white')
  const buttonhandle = () =>
  {
    setDisable(true);
    setColor('#d6d5d2');
  }
    return (
        <div style={{marginTop: "12%"}}>
          
            <NavLink  
            className ="Funcbutton" 
            to="/viewcabs">
              View Cabs
              </NavLink>  
            <NavLink 
            className ="Funcbutton"       
            to="/gettripdetails">
              Trip History
              </NavLink>
            <NavLink  
            className ="Funcbutton" 
            to="/viewroutes">
              View Routes
            </NavLink>

           
        </div>
    )
}

export default CustomerFunctions;
