import React from "react";
import ReactDOM from "react-dom";
import RouletteGun from "./RouletteGun.js";

describe(`RouletteGun Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RouletteGun />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip("renders the UI as expected", () => {
    expect(renderer.create(<HelloWorld />).toJSON()).toMatchSnapshot();
  });
});
