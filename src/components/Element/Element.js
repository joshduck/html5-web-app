import React from "react";
import cx from "classnames";
import Transition from "react-transition-group/Transition";

import effectiveTextLength from "./effectiveTextLength";

import "./Element.css";

const COLORS = {
  root: 0,
  document: 35,
  sections: 55,
  grouping: 75,
  text: 100,
  embedding: 175,
  table: 205,
  form: 280,
  interactive: 320
};

const BASE_SIZE = 32;

const colorFor = element => `hsl(${COLORS[element.group]}, 90%, 60%)`;

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
    this.state = { selectTime: null };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.element !== nextProps.element ||
      this.props.selected !== nextProps.selected
    );
  }

  onClick(allowDeselect, event) {
    event.preventDefault();

    if (
      this.props.selected &&
      allowDeselect &&
      Date.now() - this.state.selectTime > 500
    ) {
      this.props.onDeselect();
    } else {
      this.setState({ selectTime: Date.now() });
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
