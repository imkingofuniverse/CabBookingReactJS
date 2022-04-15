import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

const CabArriving = () => {
  return (
    <div>
      <h1>
        Your Cab is Booked...
        <Link to="/customerfunctions">
          <span>Home</span>
        </Link>
      </h1>
      <h1>
        Click here to Signout...
        <Link to="/">
          <span>Sign Out?</span>
        </Link>
      </h1>
      <img src="https://ravstack.com/wp-content/uploads/2020/04/Bannerimg-min.png" alt="arriving" width="562" height="562"></img>
    </div>
  );
};

export default CabArriving;