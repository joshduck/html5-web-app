import React from "react";
import cx from "classnames";
import InfoContent from "../InfoContent/InfoContent";

import "./InfoPanel.css";

const InfoPanel = ({ element }) => (
  <div
    className={cx({
      InfoPanel: true,
      "InfoPanel-showing": !!element
    })}
    onClick={e => e.stopPropagation()}
  >
    <dialog open={!!element} className="InfoPanel-panel">
      {element && <InfoContent element={element} />}
    </dialog>
  </div>
);

export default InfoPanel;
