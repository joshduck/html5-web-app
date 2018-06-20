import React, { Component, Fragment } from "react";

import "./App.css";

import Filter from "../Filter/Filter";
import Grid from "../Grid/Grid";
import InfoPanel from "../InfoPanel/InfoPanel";
import NoResults from "../NoResults/NoResults";
import Shake from "../Shake/Shake";

import getAllElements from "../../utils/getAllElements";
import getRandomElement from "../../utils/getRandomElement";
import scrollToElement from "../../utils/scrollToElement";
import doesElementMatch from "../../utils/doesElementMatch";
import recordEventForFilter from "../../utils/recordEventForFilter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: getAllElements(),
      selected: null,
      query: null
    };
  }

  onRandom() {
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
    this.setState({ query });
    recordEventForFilter(query);
  }

  onSelect(name) {
    if (this.state.selected !== name) {
      this.setState({ selected: name }, () => scrollToElement(name));
    }
  }

  render() {
    const { selected, query, elements } = this.state;

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
        <Shake onShake={() => this.onRandom()} />

        <header className="App-header">
          <h1 className="App-title">&lt;All The Tags&gt;</h1>
          <Filter onChange={query => this.onFilter(query)} />
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
