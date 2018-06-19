import debounce from "lodash.debounce";

const recordEventForFilter = debounce(query => {
  window.gtag &&
    window.gtag("event", "filter", {
      event_category: "filter",
      event_label: query
    });
}, 500);

export default recordEventForFilter;
