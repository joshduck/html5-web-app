import React, { Component } from "react";

import Element from "../Element/Element";

import "./Grid.css";

class Grid extends Component {
  render() {
    const { elements, selected } = this.props;

    return (
      <div className="Grid">
        {elements.map(element => (
          <Element
            element={element}
            key={element.name}
            selected={element.name === selected}
            onSelect={() => this.props.onSelect(element.name)}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
