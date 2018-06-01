import React, { Component } from "react";
import Element from "../Element/Element";
import "./Elements.css";

class Elements extends Component {
  constructor() {
    super();
    this.state = { selected: null };
  }

  onSelect(name) {
    this.setState({ selected: name });
  }

  render() {
    return (
      <div className="Elements">
        {this.props.elements.map(element => (
          <Element
            element={element}
            key={element.name}
            selected={element.name === this.state.selected}
            onSelect={() => this.onSelect(element.name)}
          />
        ))}
      </div>
    );
  }
}

export default Elements;
