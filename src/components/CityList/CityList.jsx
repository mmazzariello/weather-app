import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import axios from "axios";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry;

  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container>
        <Grid item md={9} xs={3}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          {weather ? <Weather temperature={weather.temperature} state={weather.state} /> : "No hay datos"}{" "}
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const weather = { temperature: 10, state: "sunny" };

  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const API_key = "a391788330b0112a0fbfe4ba249171a9";
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_key}`)
        .then((resp) => {
          const { data } = resp;
          const temperature = data.main.temp;
          const state = "sunny";
          const propName = `${city}-${country}`;
          const propValue = { temperature, state };
          setAllWeather((allWeather) => {
            const result = { ...allWeather, [propName]: propValue };
            return result;
          });
        });
    };

    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country);
    });
  }, [cities]);

  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
