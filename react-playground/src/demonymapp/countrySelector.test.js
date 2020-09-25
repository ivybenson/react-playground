import countryselector from "./countryselector";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<countryselector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
