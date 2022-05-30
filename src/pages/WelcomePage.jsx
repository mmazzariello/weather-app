import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function WelcomePage() {
  return (
    <div>
      Welcome
      <div>
        <Link to="/main">Go to Main</Link>
      </div>
    </div>
  );
}
WelcomePage.propTypes = {};

export default WelcomePage;
