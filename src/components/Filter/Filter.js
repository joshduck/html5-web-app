import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
    this.frameRef = React.createRef();
    this.state = {
      value: null,
      resetKey: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Passing value={null} to an input which has been interacted with
    // will remove and recreate the iframe. This removes the "shake to undo"
    // prompt for iOS.
    if (props.value === null && state.value !== null) {
      console.log("Should reset frame");
      return { resetKey: state.resetKey + 1 };
    } else {
      return {};
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.resetKey > this.state.resetKey;
  }

  onLoadFrame() {
    const document = this.frameRef.current.contentWindow;
    document.addEventListener("input", e => this.onInput(e.target.value));
  }

  onInput(value) {
    this.props.onChange(value);
    this.setState({ value });
  }

  render() {
    return (
      <iframe
        src="/text-input.html"
        className="Filter-frame"
        title="Filter"
        key={this.state.resetKey}
        ref={this.frameRef}
        onLoad={() => this.onLoadFrame()}
      />
    );
  }
}

export default Filter;
