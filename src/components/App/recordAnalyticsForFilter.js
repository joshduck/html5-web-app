import debounce from "lodash.debounce";

const recordAnalyticsForFilter = debounce(query => {
  window.ga && window.ga("send", "event", "Filter", "enter", query);
}, 500);

export default recordAnalyticsForFilter;
