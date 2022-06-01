import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const forecastItemListExample = [
  { hour: 19, state: "clear", temperature: 17, weekDay: "Monday" },
  { hour: 12, state: "rain", temperature: 20, weekDay: "Tuesday" },
  { hour: 14, state: "clear", temperature: 19, weekDay: "Monday" },
  { hour: 12, state: "clouds", temperature: 23, weekDay: "Thursday" },
  { hour: 18, state: "clouds", temperature: 21, weekDay: "Monday" },
];

function CityPage() {
  const city = "Barcelona";
  const country = "Spain";
  const state = "clouds";
  const temperature = 32;
  const humidity = 80;
  const wind = 5;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <AppFrame>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <Weather state={state} temperature={temperature} />
          </Grid>
          <Grid item xs={4}>
            <WeatherDetails humidity={humidity} wind={wind} />
          </Grid>
        </Grid>
        <Grid item>
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  );
}

CityPage.propTypes = {};

export default CityPage;
