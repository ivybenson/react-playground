import React, { Component } from "react";
import "./RouletteGun.css";

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletsInChamber: 8,
  };

  gun = {
    shot: "yes",
  };
  render() {
    return (
      <div>
        <p>test your luck with the gun {this.state.gun}</p>
        <button>Pull the trigger!</button>
      </div>
    );
  }
}
