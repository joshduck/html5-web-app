import React from "react";
import "./Filter.css";

export default ({ query, onChange }) => {
  return (
    <input
      value={query || ""}
      onChange={e => onChange(e.target.value)}
      className="Filter-input"
      placeholder="Filter (e.g. body, text, js)"
    />
  );
};
