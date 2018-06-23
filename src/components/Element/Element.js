import React from "react";
import cx from "classnames";
import Transition from "react-transition-group/Transition";

import effectiveTextLength from "./effectiveTextLength";

import "./Element.css";

const COLORS = {
  root: "hsl(0, 90%, 65%)",
  document: "hsl(35, 90%, 60%)",
  sections: "hsl(55, 90%, 60%)",
  grouping: "hsl(75, 90%, 55%)",
  text: "hsl(105, 90%, 60%)",
  embedding: "hsl(185, 90%, 60%)",
  table: "hsl(205, 90%, 65%)",
  form: "hsl(280, 80%, 70%)",
  interactive: "hsl(320, 80%, 65%)"
};

const BASE_SIZE = 32;

const colorFor = element => COLORS[element.group];

const sizeFor = element => {
  const length = effectiveTextLength(element.name);
  const normalized = Math.max(0, length - 4);
  return `${BASE_SIZE - normalized * 2.5}px`;
};

const classesFor = state =>
  cx({
    Element: true,
    "Element-selected": state === "entering" || state === "entered",
    "Element-deselecting": state === "exiting",
    "Element-inactive": state === "exited"
  });

class Element extends React.Component {
  constructor() {
    super();
    this.state = { interactTime: null };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.element !== nextProps.element ||
      this.props.selected !== nextProps.selected
    );
  }

  onClick(allowDeselect, event) {
    event.preventDefault();
    event.stopPropagation();

    if (
      this.props.selected &&
      allowDeselect &&
      Date.now() - this.state.interactTime > 500
    ) {
      this.props.onDeselect();
    } else {
      this.setState({ interactTime: Date.now() });
      this.props.onSelect();
    }
  }

  render() {
    const { element, selected } = this.props;

    return (
      <Transition in={selected} timeout={300}>
        {transition => (
          <a
            id={`element-${element.name}`}
            href={`#${element.name}`}
            className={classesFor(transition)}
            style={{
              background: colorFor(element),
              fontSize: sizeFor(element)
            }}
            onClick={e => this.onClick(true, e)}
            onFocus={e => this.onClick(false, e)}
          >
            <h2 className="Element-name">{element.name}</h2>
          </a>
        )}
      </Transition>
    );
  }
}

export default Element;
