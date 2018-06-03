import React from "react";

import "./InfoLink.css";

export default ({ url, children }) =>
  url ? (
    <li className="InfoLink">
      <a href={url} target="_blank" className="InfoLink-button">
        {children}
      </a>
    </li>
  ) : null;
