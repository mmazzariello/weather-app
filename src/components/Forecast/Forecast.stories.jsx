import React from "react";
import Forecast from "./Forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [
  { hour: 14, state: "clear", temperature: 17, weekDay: "Monday" },
  { hour: 12, state: "rain", temperature: 20, weekDay: "Tuesday" },
  { hour: 14, state: "thunderstorm", temperature: 19, weekDay: "Monday" },
  { hour: 12, state: "clouds", temperature: 23, weekDay: "Thursday" },
  { hour: 18, state: "rain", temperature: 21, weekDay: "Monday" },
];

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />;
