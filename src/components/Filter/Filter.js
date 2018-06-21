import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
    this.frameRef = React.createRef();

    this.state = {
      hasInteracted: false,
      resetKey: 0
    };
  }

  // This will remove and recreate the iframe if it has been interacted with. This:
  // 1. Resets the input, and
  // 2. Removes the "shake to undo" prompt for iOS.
  reset() {
    this.setState({
      hasInteracted: false,
      resetKey: this.state.resetKey + 1
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !!this.state.hasInteracted && nextState.resetKey > this.state.resetKey
    );
  }

  onLoadFrame() {
    const document = this.frameRef.current.contentWindow;
    document.addEventListener("input", e => this.onInput(e.target.value));
  }

  onInput(value) {
    this.setState({ hasInteracted: true });
    this.props.onChange(value);
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
