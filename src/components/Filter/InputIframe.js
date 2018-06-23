import React, { Component } from "react";
import forceHideKeyboard from "../../utils/forceHideKeyboard";
import "./Filter.css";

class InputIframe extends Component {
  constructor() {
    super();
    this.frameRef = React.createRef();

    this.state = {
      hasInteracted: false,
      resetKey: 0
    };
  }

  // This will remove and recreate the iframe if it has been interacted with. This
  // resets the input, and emoves the "shake to undo" prompt for iOS.
  reset() {
    forceHideKeyboard();
    this.setState({
      hasInteracted: false,
      resetKey: this.state.resetKey + 1
    });
  }

  blur() {
    forceHideKeyboard();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !!this.state.hasInteracted && nextState.resetKey > this.state.resetKey
    );
  }

  onLoadFrame() {
    const window = this.frameRef.current.contentWindow;
    window.addEventListener("input", e => this.onInput(e.target.value));
  }

  onInput(value) {
    this.setState({ hasInteracted: true });
    this.props.onChange(value);
  }

  render() {
    return (
      <iframe
        src="/text-input.html"
        className="Filter-iframe"
        title="Filter"
        key={this.state.resetKey}
        ref={this.frameRef}
        onLoad={() => this.onLoadFrame()}
        onClick={() => this.onClick()}
      />
    );
  }
}

export default InputIframe;
