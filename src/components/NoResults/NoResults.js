import React from "react";
import "./NoResults.css";

const NoResults = ({ onRandom }) => (
  <section className="NoResults">
    <h2 className="NoResults-header">No matches</h2>
    <div className="NoResults-shakePrompt">Shake for inspiration</div>
    <button className="NoResults-chooseRandom" onClick={onRandom}>
      Find something new!
    </button>
  </section>
);

export default NoResults;
