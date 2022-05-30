import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Barcelona", country: "Spain" },
  { city: "Madrid", country: "Spain" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
];

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />;
