/**
 * Fixed positioning will stop scrolling to input.
 * Font size over 16px will prevent Safari zooming in on focus.
 * https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
 */
const inputStyle = `
  opacity: 0;
  position: fixed;
  top: -100px;
  font-size: 20px;`;

/**
 * Create a shim component then focus and unfocus it so that Safari doesn't keep
 * the keyboard open for the iframe that was unceremoniously nuked from the DOM.
 * Note that this will "flash" the keyboard on some (non-iOS) browsers.
 */
const forceHideKeyboard = () => {
  const input = document.createElement("textarea");
  input.style = inputStyle;

  document.body.prepend(input);
  input.focus();

  setTimeout(() => {
    input.blur();
    document.body.removeChild(input);
  }, 10);
};

export default forceHideKeyboard;
