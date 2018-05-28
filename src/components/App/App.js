import React, { Component } from "react";
import "./App.css";

import Element from "../Element/Element";
import { getAllElements } from "../../data";

class App extends Component {
  render() {
    const elements = getAllElements();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTML</h1>
        </header>
        <div className="App-intro">
          {elements.map(element => (
            <Element element={element} key={element.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
