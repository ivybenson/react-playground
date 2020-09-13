import React from "react";
// import ReactDOM from "react-dom";
import "./HelloWorld.css";

class HelloWorld extends React.Component {
  state = {
    who: "World",
  };

  render() {
    return (
      <div className="is this a prop">
        <p>Hello, {this.state.who}!</p>
        <button
          className="Friend"
          onClick={() => this.setState({ who: "friend" })}
        >
          Friend
        </button>
        <button
          className="React"
          onClick={() => this.setState({ who: "React" })}
        >
          React
        </button>
        <button
          className="World"
          onClick={() => this.setState({ who: "World" })}
        >
          World
        </button>
      </div>
    );
  }
}

export default HelloWorld;
