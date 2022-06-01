import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Barcelona", country: "Spain", countryCode: "ES" },
  { city: "Madrid", country: "Spain", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Bogota", country: "Colombia", countryCode: "MX" },
];

test("render CityList", async () => {
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />);
  const items = await screen.findAllByRole("listitem");

  expect(items).toHaveLength(4);
});

test("Citylist click on item", async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
  const items = await screen.findAllByRole("listitem");
  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
