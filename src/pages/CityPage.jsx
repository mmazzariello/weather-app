import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import axios from "axios";
import moment from "moment";
import convertUnits from "convert-units";

const dataExample = [
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

const forecastItemListExample = [
  { hour: 19, state: "clear", temperature: 17, weekDay: "Monday" },
  { hour: 12, state: "rain", temperature: 20, weekDay: "Tuesday" },
  { hour: 14, state: "clear", temperature: 19, weekDay: "Monday" },
  { hour: 12, state: "clouds", temperature: 23, weekDay: "Thursday" },
  { hour: 18, state: "clouds", temperature: 21, weekDay: "Monday" },
];

function CityPage() {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const API_key = "a391788330b0112a0fbfe4ba249171a9";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${API_key}`;

      try {
        const { data } = await axios.get(url);
        console.log("forecastData", data);

        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((d) => moment().add(d, "d"));
        const dataAux = days.map((day) => {
          const tempObjArray = data.list.filter((item) => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === day.dayOfYear();
          });

          console.log("day.dayOfYear()", day.dayOfYear());
          console.log("tempObjArray", tempObjArray);

          const temps = tempObjArray.map((item) => item.main.temp);

          const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0));
          return {
            dayWeek: day.format("ddd"),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
          };
        });

        setData(dataAux);
        setForecastItemList(forecastItemListExample);
      } catch (error) {
        console.log(error);
      }
    };
    getForecast();
  }, [city, countryCode]);

  // const city = "Barcelona";
  const country = "Spain";
  const state = "clouds";
  const temperature = 32;
  const humidity = 80;
  const wind = 5;
  // const data = dataExample;
  // const forecastItemList = forecastItemListExample;

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
        <Grid item>{data && <ForecastChart data={data} />} </Grid>
        <Grid item>{forecastItemList && <Forecast forecastItemList={forecastItemList} />} </Grid>
      </Grid>
    </AppFrame>
  );
}

CityPage.propTypes = {};

export default CityPage;
