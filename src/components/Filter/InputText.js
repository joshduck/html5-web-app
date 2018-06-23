import React, { Component } from "react";
import "./Filter.css";

class InputText extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  reset() {
    this.inputRef.current.value = "";
  }

  blur() {
    this.inputRef.current.blur();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        onClick={e => e.stopPropagation()}
        onChange={e => this.props.onChange(e.target.value)}
        onFocus={e => this.props.onFocus()}
        className="Filter-input"
        placeholder="Filter (e.g. body, text, js)"
      />
    );
  }
}

export default InputText;
