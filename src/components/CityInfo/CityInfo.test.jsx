import React from "react";
import { render, screen } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("CityInfo render", async () => {
  const city = "Barcelona";
  const country = "Spain";

  const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>);
  const cityAndCountryComponents = await screen.findAllByRole("heading");

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
