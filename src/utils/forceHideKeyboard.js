/**
 * Create a shim component then focus and unfocus it so that Safari doesn't keep
 * the keyboard open for the iframe that was unceremoniously nuked from the DOM.
 * Note that this will "flash" the keyboard on some (non-iOS) browsers.
 */
const forceHideKeyboard = () => {
  const input = document.createElement("textarea");

  /**
   * Fixed positioning will stop scrolling to input.
   * Font size over 16px will prevent Safari zooming in on focus.
   * https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
   */
  input.style.opacity = 0;
  input.style.position = "fixed";
  input.style.top = "100px";
  input.style.fontSize = "20px";

  document.body.appendChild(input);
  input.focus();

  setTimeout(() => {
    input.blur();
    document.body.removeChild(input);
  }, 10);
};

export default forceHideKeyboard;
