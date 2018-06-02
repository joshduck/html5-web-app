import React, { Component } from "react";
import cx from "classnames";

import Element from "../Element/Element";
import Info from "../Info/Info";
import scrollToElement from "./scrollToElement";
import "./Elements.css";

const matchFor = (element, query) => {
  return (
    element.name.indexOf(query) !== -1 ||
    element.group.indexOf(query) !== -1 ||
    (element.keywords &&
      element.keywords.some(keyword => keyword.indexOf(query) !== -1))
  );
};
class Elements extends Component {
  constructor() {
    super();
    this.state = { selected: null, query: null };
  }

  onSearch(query) {
    this.setState({ query });
  }

  onSelect(name) {
    if (this.state.selected != name) {
      this.setState({ selected: name }, () => scrollToElement(name));
    }
  }

  render() {
    const { selected, query } = this.state;
    const elements = this.props.elements;

    let selectedElement = elements[selected];
    let visibleElements = Object.values(elements);

    if (query) {
      visibleElements = visibleElements.filter(element =>
        matchFor(element, query)
      );
    }

    if (!visibleElements.includes(selectedElement)) {
      selectedElement = null;
    }

    return (
      <div className="Elements">
        <input onChange={e => this.onSearch(e.target.value)} />
        <Info element={selectedElement} />
        <div className="Elements-icons">
          {visibleElements.map(element => (
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
