import React from "react";
import PropTypes from "prop-types";
import { WiCloudy, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from "react-icons/wi";

export const validValues = ["cloud", "cloudy", "fog", "sunny", "rain"];

const stateByName = {
  cloud: WiCloudy,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const InconState = ({ state }) => {
  const StateByName = stateByName[state];

  return <StateByName />;
};

InconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default InconState;
