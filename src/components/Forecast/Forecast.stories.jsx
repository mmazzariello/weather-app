import React from "react";
import Forecast from "./Forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [
  { hour: 14, state: "sunny", temperature: 17, weekDay: "Monday" },
  { hour: 12, state: "rain", temperature: 20, weekDay: "Tuesday" },
  { hour: 14, state: "sunny", temperature: 19, weekDay: "Monday" },
  { hour: 12, state: "cloud", temperature: 23, weekDay: "Thursday" },
  { hour: 18, state: "fog", temperature: 21, weekDay: "Monday" },
];

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />;
