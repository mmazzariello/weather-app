import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons";
import IconState, { validValues } from "./../IconState";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "4em" }}>
          <IconState state={state}></IconState>
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} °</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
