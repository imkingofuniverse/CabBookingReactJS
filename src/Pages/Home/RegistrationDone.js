import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

const RegistrationDone = () => {
  return (
    <div>
      <h1>
       Registration Successful...
        <Link to="/customerfunctions">
          <span>Click here to book now</span>
        </Link>
      </h1>
      <img src="https://www.kobocabs.com/wp-content/uploads/2021/09/kobocabs-booking.png" alt="registrationdone" width="700" height="467"></img>
    </div>
  );
};

export default RegistrationDone;