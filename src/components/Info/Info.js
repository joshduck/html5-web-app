import React, { Fragment, Component } from "react";
import Transition from "react-transition-group/Transition";
import cx from "classnames";

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
              <li>
                <a href="#a" className="Info-link">
                  Test
                </a>
              </li>
              <li>
                <a href="#a" className="Info-link">
                  Test
                </a>
              </li>
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Info;
