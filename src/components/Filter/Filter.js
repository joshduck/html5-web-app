import React, { Component } from "react";
import InputIframe from "./InputIframe";
import InputText from "./InputText";
import "./Filter.css";

var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
const InputComponent = iOS ? InputIframe : InputText;

class Filter extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  reset() {
    this.inputRef.current.reset();
  }

  blur() {
    this.inputRef.current.blur();
  }

  render() {
    return (
      <div className="Filter">
        <InputComponent ref={this.inputRef} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Filter;
