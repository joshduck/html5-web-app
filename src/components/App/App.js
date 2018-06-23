import React, { Component } from "react";

import Filter from "../Filter/Filter";
import Grid from "../Grid/Grid";
import InfoPanel from "../InfoPanel/InfoPanel";
import NoResults from "../NoResults/NoResults";
import Shake from "../Shake/Shake";

import getAllElements from "../../utils/getAllElements";
import getRandomElement from "../../utils/getRandomElement";
import scrollToElement from "../../utils/scrollToElement";
import doesElementMatch from "../../utils/doesElementMatch";
import { reportFilter, reportShake } from "../../utils/analytics";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.filterRef = React.createRef();
    this.state = {
      elements: getAllElements(),
      selected: null,
      query: null
    };
  }

  onShake() {
    reportShake();
    this.onRandom();
  }

  onRandom() {
    this.filterRef.current.reset();
    const name = getRandomElement(this.state.elements);
    this.setState(
      {
        query: null,
        selected: name
      },
      () => scrollToElement(name)
    );
  }

  onFilter(query) {
    if (query) {
      reportFilter(query);
    }
    this.setState({ query });
  }

  onSelect(name) {
    this.filterRef.current.blur();
    if (this.state.selected !== name) {
      this.setState({ selected: name }, () => scrollToElement(name));
    }
  }

  onFocusFilter() {
    this.setState({ selected: null });
  }

  render() {
    const { selected, query, elements } = this.state;

    let selectedElement = elements[selected];
    let visibleElements = Object.keys(elements).map(key => elements[key]);

    if (query) {
      visibleElements = visibleElements.filter(element =>
        doesElementMatch(element, query)
      );
    }

    if (!visibleElements.includes(selectedElement)) {
      selectedElement = null;
    }

    return (
      <div className="App" onClick={() => this.onSelect(null)}>
        <Shake onShake={() => this.onShake()} />

        <header className="App-header">
          <h1 className="App-title">
            <span aria-hidden="true">&lt;</span>
            All The Tags
            <span aria-hidden="true">&gt;</span>
          </h1>
          <Filter
            ref={this.filterRef}
            value={query}
            onChange={value => this.onFilter(value)}
            onFocus={() => this.onFocusFilter(null)}
          />
        </header>

        <main className="App-content">
          {!visibleElements.length && (
            <NoResults onRandom={() => this.onRandom()} />
          )}

          <Grid
            elements={visibleElements}
            selected={selected}
            onSelect={name => this.onSelect(name)}
            className="App-grid"
          />

          <InfoPanel element={selectedElement} />
        </main>

        <footer className="App-footer">
          <a href="https://joshduck.com/">Created by @joshduck</a>
        </footer>
      </div>
    );
  }
}

export default App;
