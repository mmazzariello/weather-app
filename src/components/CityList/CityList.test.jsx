import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Barcelona", country: "Spain" },
  { city: "Madrid", country: "Spain" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
];

test("render CityList", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);
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
