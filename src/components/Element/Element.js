import React from "react";
import "./Element.css";

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

const sizeFor = element => `${1.6 - element.name.length / 20}em`;

class Element extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  onBlur(e) {
    setTimeout(() => this.setState({ active: false }), 150);
  }

  onFocus() {
    this.setState({ active: true });
  }

  render() {
    const { element } = this.props;
    const color = colorFor(element);
    const size = sizeFor(element);

    return (
      <a
        href="#"
        className={"Element " + (this.state.active ? "Element-active" : "")}
        style={{ background: color }}
        onClick={e => e.preventDefault()}
        onFocus={e => this.onFocus(e)}
        onBlur={e => this.onBlur(e)}
      >
        <h2 className="Element-name" style={{ fontSize: size }}>
          {element.name}
        </h2>
        {/*<div className="Element-info">{element.group}</div>*/}
      </a>
    );
  }
}

export default Element;
