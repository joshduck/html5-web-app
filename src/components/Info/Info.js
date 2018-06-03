import React, { Fragment, Component } from "react";
import cx from "classnames";

import InfoLink from "../InfoLink/InfoLink";

import "./Info.css";

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
        {element && (
          <Fragment>
            <h1>{element.name}</h1>
            <p className="Info-desc">{element.description}</p>
            <ul className="Info-links">
              <InfoLink url={element.links.mdn}>MDN</InfoLink>
              <InfoLink url={element.links.w3c}>W3C</InfoLink>
              <InfoLink url={element.links.w3schools}>w3schools</InfoLink>
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Info;
