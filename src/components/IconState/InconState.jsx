import React from "react";
import PropTypes from "prop-types";
import { WiDayCloudy, WiDayShowers, WiDaySunny, WiDayThunderstorm, WiRain, WiDaySnow } from "react-icons/wi";

export const validValues = ["drizzle", "thunderstorm", "clouds", "clear", "rain", "snow"];

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiDaySnow,
  drizzle: WiDayShowers,
  thunderstorm: WiDayThunderstorm,
};

const InconState = ({ state }) => {
  const StateByName = stateByName[state];

  return <StateByName />;
};

InconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default InconState;
