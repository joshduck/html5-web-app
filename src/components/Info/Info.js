import React, { Fragment, Component } from "react";
import cx from "classnames";
import Prism from "prismjs";
import InfoLink from "../InfoLink/InfoLink";

import "./Info.css";

const InfoContent = ({ element }) => {
  const example = Prism.highlight(
    element.example || "",
    Prism.languages.html,
    "html"
  );

  return (
    <Fragment>
      <h1>
        {element.name} {element.status && "(non-standard)"}
      </h1>
      <p className="Info-desc">{element.description}</p>
      {element.example && (
        <pre
          className="Info-example"
          dangerouslySetInnerHTML={{ __html: example }}
        />
      )}
      <ul className="Info-links">
        <InfoLink url={element.links.mdn}>MDN</InfoLink>
        <InfoLink url={element.links.w3c}>W3C</InfoLink>
        <InfoLink url={element.links.w3schools}>w3schools</InfoLink>
      </ul>
    </Fragment>
  );
};

class Info extends Component {
  render() {
    const { element } = this.props;

    return (
      <div
        className={cx({
          Info: true,
          "Info-showing": !!element
        })}
      >
        <dialog open={!!element} className="Info-panel">
          {element && <InfoContent element={element} />}
        </dialog>
      </div>
    );
  }
}

export default Info;
