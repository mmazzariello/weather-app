import React from "react";
import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

test("Weather render", async () => {
  const { findByRole } = render(<Weather temperature={10} state="sunny" />);
  const temp = await screen.findByRole("heading");

  expect(temp).toHaveTextContent("10");
});
