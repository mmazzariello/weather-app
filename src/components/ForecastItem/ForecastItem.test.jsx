import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("ForecastItem render", async () => {
  // Tarea, se deben renderizar los diferentes textos

  const { getByText } = render(<ForecastItem hour={10} state="cloud" temperature={23} weekDay="Monday" />);
  const hour = await screen.findByText(/10/);
  const state = await screen.findByText("cloud");
  const temperature = await screen.findByText(/23/);
  const weekDay = await screen.findByText("Monday");

  expect(hour).toHaveTextContent("10");
  expect(state).toHaveTextContent("cloud");
  expect(temperature).toHaveTextContent("23");
  expect(weekDay).toHaveTextContent("Monday");
});
