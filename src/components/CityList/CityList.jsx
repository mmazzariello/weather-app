import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import axios from "axios";
import convertUnits from "convert-units";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

// li: es un item (según tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
  const { city, countryCode, country } = cityAndCountry;
  // const { temperature, state } = weather

  return (
    <ListItem button key={getCityCode(city, countryCode)} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const API_key = "a391788330b0112a0fbfe4ba249171a9";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_key}`;

      try {
        const response = await axios.get(url);

        const { data } = response;
        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state }; // Ej: { temperature: 10, state: "sunny" }

        setAllWeather((allWeather) => ({ ...allWeather, [propName]: propValue }));
      } catch (error) {
        if (error.response) {
          // Errores que nos responde el server
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          // Errores que suceden por no llegar al server
          setError("Verifique la conexión a internet");
        } else {
          // Errores imprevistos
          setError("Error al cargar los datos");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]
          )
        )}
      </List>
    </div>
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
