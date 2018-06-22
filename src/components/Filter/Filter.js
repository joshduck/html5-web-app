import React, { Component } from "react";
import "./Filter.css";

// Create a shim component then focus and unfocus it so that Safari doesn't keep
// the keyboard open for the iframe that was unceremoniously nuked from the DOM.
const forceHideKeyboard = () => {
  const input = document.createElement("textarea");
  input.className = "Filter-focusShim";
  document.body.prepend(input);
  input.focus();
  setTimeout(() => {
    input.blur();
    document.body.removeChild(input);
  }, 100);
};

class Filter extends Component {
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
        className="Filter-frame"
        title="Filter"
        key={this.state.resetKey}
        ref={this.frameRef}
        onLoad={() => this.onLoadFrame()}
        onClick={() => this.onClick()}
      />
    );
  }
}

export default Filter;
