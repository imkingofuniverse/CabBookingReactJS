import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    table: {
      width: '100%',
    },
    tablecell: {
        fontFamily: 'Montserrat,sans-serif',
        color: 'black',
        fontSize:'17px'
        
    },
    tablecellfont:{
        fontFamily: 'Montserrat,sans-serif',
        color: '#303330'
    }
  });
  
  function createData(Floc, Sloc, Distance, Rate) {
    return { Floc, Sloc, Distance, Rate };
  }
  
  const rows = [
    createData('Hyderabad', 'Banglore', 152, '₹3040'),
    createData('Hyderabad', 'Mumbai', 462, '₹9240'),
    createData('Hyderabad', 'Chennai', 162, '₹3240'),
    createData('Bengaluru', 'Chennai', 262, '₹5240'),
    createData('Bengaluru', 'Mumbai', 172, '₹3440'),
    createData('Chennai', 'Mumbai', 262, '₹5240'),
    
  ];
  
 function ViewRoutes() {
    const classes = useStyles();
  
    return (
        <div style={{borderRadius: '5px',marginTop:'1%', marginLeft:'25%', marginRight:'25%',paddingTop:'1.5%',paddingBottom:'1.5%'}} align="center">
          <h2>Our Travelling Services</h2>
            <Card style={{width:'100%'}} elevation='4'>
      <TableContainer elevation='4'>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell className={classes.tablecell}>From Location</TableCell>
              <TableCell className={classes.tablecell}>To Location</TableCell>
              <TableCell className={classes.tablecell}>Distance (km)</TableCell>
              <TableCell className={classes.tablecell}>Starting from(₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Floc}>
                <TableCell className={classes.tablecellfont} component="th" scope="row">
                  {row.Floc}
                </TableCell>
                <TableCell className={classes.tablecellfont}>{row.Sloc}</TableCell>
                <TableCell className={classes.tablecellfont}>{row.Distance}</TableCell>
                <TableCell className={classes.tablecellfont}>{row.Rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      <NavLink to="/customerFunctions" style={{cursor:'pointer',textDecoration: 'none'}}><Button 
  variant="contained" 
  color="primary" 
  style={{marginTop:'3%',backgroundColor:'black',width:'35ch'}} >
    
    Back
    
    </Button>
    </NavLink>
    <br/>
              
      
      </div>
    );
  }
export default ViewRoutes;
