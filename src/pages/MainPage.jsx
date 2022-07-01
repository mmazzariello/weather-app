import React from "react";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import CityList from "./../components/CityList";
import AppFrame from "../components/AppFrame/AppFrame";
import { getCities } from "../services/serviceCities";

function MainPage() {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
}

MainPage.propTypes = {};

export default MainPage;
