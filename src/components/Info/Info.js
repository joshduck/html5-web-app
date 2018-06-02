import React, { Fragment, Component } from "react";
import Transition from "react-transition-group/Transition";
import cx from "classnames";

import "./Info.css";

const LinkItem = ({ url, children }) =>
  url ? (
    <li>
      <a href={url} target="_blank" className="Info-link">
        {children}
      </a>
    </li>
  ) : null;

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
              <LinkItem url={element.links.w3c}>W3C</LinkItem>
              <LinkItem url={element.links.mdn}>
                Mozilla Developer Network
              </LinkItem>
              <LinkItem url={element.links.w3schools}>w3schools</LinkItem>
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Info;
