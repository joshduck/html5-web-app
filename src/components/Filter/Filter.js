import React from "react";
import "./Filter.css";

export default ({ onChange }) => {
  return (
    <input
      onChange={e => onChange(e.target.value)}
      className="Filter-input"
      placeholder="Filter (e.g. body, text, js)"
    />
  );
};
