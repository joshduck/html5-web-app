import React, { Component } from "react";
import Shake from "shake.js";

class ShakeComponent extends Component {
  componentDidMount() {
    this.shakeObserver = new Shake({
      threshold: 10, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
    });
    this.shakeHandler = () => {
      this.props.onShake();
    };
    this.shakeObserver.start();
    window.addEventListener("shake", this.shakeHandler, false);
  }

  componentWillUnmount() {
    this.shakeObserver.stop();
    window.removeEventListener("shake", this.shakeHandler, false);
  }

  render() {
    return null;
  }
}

export default ShakeComponent;
