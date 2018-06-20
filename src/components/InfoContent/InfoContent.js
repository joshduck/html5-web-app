import React from "react";
import Prism from "prismjs";
import InfoLink from "../InfoLink/InfoLink";

import "./InfoContent.css";

const InfoContent = ({ element }) => {
  const example = Prism.highlight(
    element.example || "",
    Prism.languages.html,
    "html"
  );

  return (
    <div className="InfoContent">
      <h1>
        {element.name} {element.status && "(non-standard)"}
      </h1>
      <p className="InfoContent-desc">{element.description}</p>
      {element.example && (
        <pre
          className="InfoContent-example"
          dangerouslySetInnerHTML={{ __html: example }}
        />
      )}
      <ul className="InfoContent-links">
        <InfoLink url={element.links.mdn}>MDN</InfoLink>
        <InfoLink url={element.links.w3c}>W3C</InfoLink>
      </ul>
    </div>
  );
};

export default InfoContent;
