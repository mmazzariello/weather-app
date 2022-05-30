import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test("render weather details", async () => {
  const { getByText } = render(<WeatherDetails humidity={18} wind={10} />);
  const wind = await screen.findByText(/10/);
  const humidity = await screen.findByText(/18/);

  expect(wind).toHaveTextContent("Wind: 10km/h");
  expect(humidity).toHaveTextContent("Humidity: 18%");
});
