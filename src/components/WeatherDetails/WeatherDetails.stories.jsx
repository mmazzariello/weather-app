import React from "react";
import WeatherDetails from "./WeatherDetails";

export default {
  title: "WeatherDetails",
  component: <WeatherDetails></WeatherDetails>,
};

export const WeatherDetailsExample = () => <WeatherDetails humidity={30} wind={10}></WeatherDetails>;
