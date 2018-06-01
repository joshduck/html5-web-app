import React, { Component } from "react";
import "./App.css";

import Elements from "../Elements/Elements";
import { getAllElements } from "../../data";

const elements = getAllElements();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">All The Tags</h1>
        </header>
        <Elements elements={elements} />
      </div>
    );
  }
}

export default App;
