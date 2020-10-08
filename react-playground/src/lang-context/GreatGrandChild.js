import React, { Component } from "react";
import languageSpecificCopy from "./languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;
  state = {
    showBody: false,
  };
  render() {
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2 onClick={() => this.setState({ showBody: !this.state.showBody })}>
          {copy.title}
        </h2>
        {this.state.showBody && <p>{copy.body}</p>}
      </section>
    );
  }
}

export default GreatGrandChild;
