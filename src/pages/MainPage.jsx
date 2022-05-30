import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import CityList from "./../components/CityList";
import AppFrame from "../components/AppFrame/AppFrame";

const cities = [
  { city: "Barcelona", country: "Spain" },
  { city: "Madrid", country: "Spain" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
];

function MainPage() {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/city");
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
