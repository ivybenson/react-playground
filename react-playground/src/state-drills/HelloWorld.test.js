import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld.js";

describe(`HelloWorld Component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HelloWorld />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip("renders the UI as expected", () => {
    expect(renderer.create(<HelloWorld />).toJSON()).toMatchSnapshot();
  });
});
