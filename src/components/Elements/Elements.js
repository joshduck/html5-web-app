import React, { Component } from "react";
import cx from "classnames";

import Element from "../Element/Element";
import Info from "../Info/Info";
import scrollToElement from "./scrollToElement";
import "./Elements.css";

window.ste = scrollToElement;

class Elements extends Component {
  constructor() {
    super();
    this.state = { selected: null };
  }

  onSelect(name) {
    if (this.state.selected != name) {
      this.setState({ selected: name }, () => scrollToElement(name));
    }
  }

  render() {
    const { elements } = this.props;

    return (
      <div className="Elements">
        <Info element={elements[this.state.selected]} />
        <div className="Elements-icons">
          {Object.values(elements).map(element => (
            <Element
              element={element}
              key={element.name}
              selected={element.name === this.state.selected}
              onSelect={() => this.onSelect(element.name)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Elements;
