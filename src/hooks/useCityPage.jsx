import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { getForecastUrl } from "../utils/urls";
import { toCelsius } from "../utils/utils";
import getChartData from "./../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";
import useCityList from "../hooks/useCityList";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });

      try {
        const { data } = await axios.get(url);

        const dataAux = getChartData(data);

        setChartData(dataAux);
        const forecastItemListAux = getForecastItemList(data);

        setForecastItemList(forecastItemListAux);
      } catch (error) {
        console.log(error);
      }
    };
    getForecast();
  }, [city, countryCode]);

  return { city, chartData, forecastItemList, countryCode };
};

export default useCityPage;
