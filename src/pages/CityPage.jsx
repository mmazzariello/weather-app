import React from "react";
// import PropTypes from "prop-types";
import { LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import useCityPage from "../hooks/useCityPage";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import useCityList from "../hooks/useCityList";
import { getCityCode } from "../utils/utils";
import { getCountryNameByCountryCode } from "../services/serviceCities";

function CityPage() {
  const { city, chartData, forecastItemList, countryCode } = useCityPage();
  const { allWeather } = useCityList([{ city, countryCode }]);

  const weather = allWeather[getCityCode(city, countryCode)];
  const country = countryCode && getCountryNameByCountryCode(countryCode);
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

  const state = weather && weather.state;
  const temperature = weather && weather.temperature;

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
            {humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />}
          </Grid>
        </Grid>
        <Grid item>{!chartData && !forecastItemList && <LinearProgress />}</Grid>
        <Grid item>{chartData && <ForecastChart data={chartData} />} </Grid>
        <Grid item>{forecastItemList && <Forecast forecastItemList={forecastItemList} />} </Grid>
      </Grid>
    </AppFrame>
  );
}

CityPage.propTypes = {};

export default CityPage;
