import React from "react";
import "./Element.css";

const colors = {
  root: 0,
  document: 35,
  sections: 55,
  grouping: 75,
  text: 100,
  embedding: 175,
  table: 205,
  form: 280,
  interactive: 320
};

const Element = ({ element }) => {
  const color = `hsl(${colors[element.group]}, 85%, 60%)`;
  return (
    <div className="Element" style={{ background: color }}>
      <h2 className="Element-name">{element.name}</h2>
      {element.group}
      {/*
    <p>{element.group}</p>
    <p>{element.description}</p>
    <p>{element.links.w3c} {element.links.mdn} {element.links.htmlDoctor}</p>
    */}
    </div>
  );
};

export default Element;
