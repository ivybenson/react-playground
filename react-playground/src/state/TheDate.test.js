import React from "react";
import ReactDOM from "react-dom";
import Messages from "./TheDate.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TheDate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
