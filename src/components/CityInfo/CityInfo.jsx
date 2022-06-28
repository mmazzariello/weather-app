import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const CityInfo = ({ city, country }) => {
  console.log(country);
  return (
    <div>
      <Typography display="inline" variant="h4">
        {city},
      </Typography>
      <Typography display="inline" variant="h6">
        {country}
      </Typography>
    </div>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
