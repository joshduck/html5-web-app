const INFO_PANEL_HEIGHT = 200;
const EDGE_BUFFER = 12;

const scrollTo = y =>
  window.scrollTo(0, y, {
    behavior: "smooth"
  });

export default name => {
  const element = document.getElementById(`element-${name}`);
  const rect = element.getBoundingClientRect();

  const screenTop = window.pageYOffset;
  const screenHeight = window.innerHeight - INFO_PANEL_HEIGHT;
  const screenBottom = window.pageYOffset + screenHeight;
  const elementTop = screenTop + rect.top;
  const elementBottom = screenTop + rect.bottom;

  if (elementTop < screenTop) {
    scrollTo(elementTop - EDGE_BUFFER);
  } else if (elementBottom > screenBottom) {
    scrollTo(elementBottom - screenHeight + EDGE_BUFFER);
  }
};
