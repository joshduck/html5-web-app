import groupedElements from "../data/elements";

import w3c from "../data/links/w3c";
import mdn from "../data/links/mdn";

const getLink = (list, name) => {
  if (list[name]) {
    return list[name];
  } else if (name.match(/h\d/)) {
    return list["h*"];
  }
};

const getAllElements = () => {
  const all = {};

  Object.keys(groupedElements).forEach(groupName => {
    const groupElements = groupedElements[groupName];
    Object.keys(groupElements).forEach(elementName => {
      const element = groupElements[elementName];

      const links = {
        w3c: getLink(w3c, elementName),
        mdn: getLink(mdn, elementName)
      };

      if (process.env.NODE_ENV === "development") {
        if (!links.w3c) console.warn(`No W3C link for ${elementName}`);
        if (!links.mdn) console.warn(`No MDN link for ${elementName}`);
        if (!element.example)
          console.warn(`No example for ${groupName}/${elementName}`);
        if (element.example && element.example.length > 46)
          console.warn(
            `Example for ${groupName}/${elementName} is ${
              element.example.length
            } chars.`
          );
      }

      all[elementName] = {
        group: groupName,
        name: elementName,
        status: element.status,
        description: element.description,
        example: element.example,
        keywords: element.keywords,
        weight: element.weight || 1,
        links
      };
    });
  });

  const keys = Object.keys(all);
  keys.sort();

  return all;
};

export default getAllElements;
