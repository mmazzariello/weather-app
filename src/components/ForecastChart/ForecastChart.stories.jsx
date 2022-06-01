import React from "react";
import ForecastChart from "./ForecastChart";

export default {
  title: "ForecastChart",
  component: ForecastChart,
};

const data = [
  {
    dayWeek: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayWeek: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayWeek: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayWeek: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayWeek: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayWeek: "Sab 12",
    min: 12,
    max: 19,
  },
];

export const ForecastChartExample = () => <ForecastChart data={data} />;
