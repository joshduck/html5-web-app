import zenscroll from "zenscroll";

const INFO_PANEL_HEIGHT = 200;
const EDGE_BUFFER = 20;

export default name => {
  const element = document.getElementById(`element-${name}`);
  if (!element) {
    return;
  }

  const rect = element.getBoundingClientRect();
  const screenHeight = window.innerHeight - INFO_PANEL_HEIGHT;

  if (rect.bottom < EDGE_BUFFER || rect.top > screenHeight - EDGE_BUFFER) {
    zenscroll.center(element);
  }
};
