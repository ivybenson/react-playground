import demonyn from "./demonym";
import Demonym from "./demonym";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Demonym />, div);
  ReactDOM.unmountComponentAtNode(div);
});
