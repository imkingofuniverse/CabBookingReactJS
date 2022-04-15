import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import { Button, Card} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';


const HomePage = () => {
  return (


<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://telanganatoday.com/wp-content/uploads/2021/11/Did-your-cab-driver-cancel-on-you-after-confirming-your-booking-Heres-what-you-can-do.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://telanganatoday.com/wp-content/uploads/2021/11/Did-your-cab-driver-cancel-on-you-after-confirming-your-booking-Heres-what-you-can-do.jpg"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://telanganatoday.com/wp-content/uploads/2021/11/Did-your-cab-driver-cancel-on-you-after-confirming-your-booking-Heres-what-you-can-do.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  
  );
};

export default HomePage;
    
