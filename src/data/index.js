import groupedElements from "./elements";

import w3c from "./links/w3c";
import mdn from "./links/mdn";
import htmldoctor from "./links/htmldoctor";
import htmldog from "./links/htmldog";
import w3schools from "./links/w3schools";

const getLink = (list, name) => {
  if (list[name]) {
    return list[name];
  } else if (name.match(/h\d/)) {
    return list["h*"];
  }
};

export const getAllElements = () => {
  const all = {};

  Object.keys(groupedElements).forEach(groupName => {
    const groupElements = groupedElements[groupName];
    Object.keys(groupElements).forEach(elementName => {
      const element = groupElements[elementName];

      const links = {
        w3c: getLink(w3c, elementName),
        mdn: getLink(mdn, elementName),
        htmldoctor: getLink(htmldoctor, elementName),
        htmldog: getLink(htmldog, elementName),
        w3schools: getLink(w3schools, elementName)
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
        links
      };
    });
  });

  const keys = Object.keys(all);
  keys.sort();

  return all;
};
