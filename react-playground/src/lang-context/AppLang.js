import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";
import Context from "./LanguageContext";

export default class Applang extends Component {
  state = {
    lang: window.navigator.language,
    setLang: (lang) => this.setState({ lang }),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="Applang">
          <LangControls />
          <Child />
        </div>
      </Context.Provider>
    );
  }
}
