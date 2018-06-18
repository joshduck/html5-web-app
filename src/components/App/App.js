import React, { Component } from "react";

import "./App.css";

import Grid from "../Grid/Grid";
import Info from "../Info/Info";
import Filter from "../Filter/Filter";

import { getAllElements } from "../../data";
import scrollToElement from "./scrollToElement";
import doesElementMatch from "./doesElementMatch";
import recordAnalyticsForFilter from "./recordAnalyticsForFilter";

const elements = getAllElements();

class App extends Component {
  constructor() {
    super();
    this.state = { selected: null, query: null };
  }

  onFilter(query) {
    this.setState({ query });
    recordAnalyticsForFilter(query);
  }

  onSelect(name) {
    if (this.state.selected !== name) {
      this.setState({ selected: name }, () => scrollToElement(name));
    }
  }

  render() {
    const { selected } = this.state;
    const { query } = this.state;

    let selectedElement = elements[selected];
    let visibleElements = Object.values(elements);

    if (query) {
      visibleElements = visibleElements.filter(element =>
        doesElementMatch(element, query)
      );
    }

    if (!visibleElements.includes(selectedElement)) {
      selectedElement = null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">&lt;All The Tags&gt;</h1>
          <Filter onChange={query => this.onFilter(query)} />
        </header>

        <main className="App-content">
          {!visibleElements.length && (
            <div className="App-noMatch">No matches</div>
          )}

          <Grid
            elements={visibleElements}
            selected={selected}
            onSelect={name => this.onSelect(name)}
            className="App-grid"
          />

          <Info element={selectedElement} />
        </main>

        <footer className="App-footer">
          <a href="https://joshduck.com/">Created by @joshduck</a>
        </footer>
      </div>
    );
  }
}

export default App;
