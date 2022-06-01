import React from "react";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import CityList from "./../components/CityList";
import AppFrame from "../components/AppFrame/AppFrame";

const cities = [
  { city: "Barcelona", country: "Spain", countryCode: "ES" },
  { city: "Madrid", country: "Spain", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Lisboa", country: "Portugal", countryCode: "PT" },
];

function MainPage() {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
}

MainPage.propTypes = {};

export default MainPage;
