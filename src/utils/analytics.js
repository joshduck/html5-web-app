import debounce from "lodash.debounce";

const reportInteraction = (name, options) => {
  window.gtag &&
    window.gtag("event", name, {
      event_category: "interaction",
      ...options
    });
};

const reportFilter = debounce(
  query => reportInteraction("filter", { event_label: query }),
  500
);

const reportShake = debounce(() => reportInteraction("shake"), 1000);

export { reportFilter, reportShake };
