import React from 'react';
import './Element.css';

const Element = ({ element }) =>
  <div class="Element">
    <h2 class="Element-name">{element.name}</h2>
    <p>{element.group}</p>
    <p>{element.description}</p>
    <p>{element.links.w3c} {element.links.mdn} {element.links.htmlDoctor}</p>
  </div>;


export default Element;