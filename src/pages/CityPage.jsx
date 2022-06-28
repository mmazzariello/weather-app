import React from "react";
// import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import useCityPage from "../hooks/useCityPage";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";

function CityPage() {
  const { city, chartData, forecastItemList } = useCityPage();

  const country = "Spain";
  const state = "clouds";
  const temperature = 32;
  const humidity = 80;
  const wind = 5;

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
        <Grid item>{chartData && <ForecastChart data={chartData} />} </Grid>
        <Grid item>{forecastItemList && <Forecast forecastItemList={forecastItemList} />} </Grid>
      </Grid>
    </AppFrame>
  );
}

CityPage.propTypes = {};

export default CityPage;
