import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App component", () => {
  test("Snapshot test", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
