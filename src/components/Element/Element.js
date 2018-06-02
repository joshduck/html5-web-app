import React from "react";
import cx from "classnames";
import "./Element.css";
import Transition from "react-transition-group/Transition";

const colors = {
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

const colorFor = element => `hsl(${colors[element.group]}, 83%, 60%)`;

const sizeFor = element => `${32 - element.name.length * 1.3}px`;

const classesFor = state =>
  cx({
    Element: true,
    "Element-selected": state === "entering" || state === "entered",
    "Element-deselecting": state === "exiting",
    "Element-inactive": state === "exited"
  });

class Element extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.element !== nextProps.element ||
      this.props.selected !== nextProps.selected
    );
  }

  onClick(e) {
    this.props.onSelect();
    e.preventDefault();
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
            onClick={e => this.onClick(e)}
            onFocus={e => this.onClick(e)}
          >
            <h2 className="Element-name">{element.name}</h2>
          </a>
        )}
      </Transition>
    );
  }
}

export default Element;
