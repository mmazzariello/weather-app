import { useState, useEffect } from "react";
import convertUnits from "convert-units";
import axios from "axios";
import { validValues } from "../components/IconState";
import { getCityCode, toCelsius } from "../utils/utils";
import { getWeatherUrl } from "../utils/urls";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        const response = await axios.get(url);

        const { data } = response;
        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0));
        const stateFromServer = data.weather[0].main.toLowerCase();
        const state = validValues.includes(stateFromServer) ? stateFromServer : null;

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };

        setAllWeather((allWeather) => ({ ...allWeather, [propName]: propValue }));
      } catch (error) {
        if (error.response) {
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          setError("Verifique la conexión a internet");
        } else {
          setError("Error al cargar los datos");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);
  return { error, setError, allWeather };
};

export default useCityList;
