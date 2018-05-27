import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import elements from '../../data/elements';
import w3cLinks from '../../data/w3c-links'
import mdnLinks from '../../data/mdn-links'
import htmlDoctorLinks from '../../data/htmldoctor-links'

class App extends Component {
  render() {
    const all = [];

    Object.keys(elements).map(groupName => {
      const groupElements = elements[groupName];
      Object.keys(groupElements).map(elementName => {
        console.log(elementName, groupName, groupElements[elementName]);
        const element = { group: groupName, name: elementName, ...groupElements[elementName] };
        element.urls.w3c = w3cLinks[elementName];
        element.urls.hdn = mdnLinks[elementName];
        element.urls.htmlDoctor = htmlDoctorLinks[elementName];
        all.push(element);
      })
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-still" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {all.map(element => <div>{element.name} {element.group}<br /> {JSON.stringify(element)}<br /></div>)}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
