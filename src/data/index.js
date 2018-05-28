import elements from './elements';

import w3c from './links/w3c'
import mdn from './links/mdn'
import htmldoctor from './links/htmldoctor'
import htmldog from './links/htmldog'
import w3schools from './links/w3schools'

export const getAllElements = () => {
  const all = [];

  Object.keys(elements).map(groupName => {
    const groupElements = elements[groupName];
    Object.keys(groupElements).map(elementName => {
      const element = groupElements[elementName];
      const links = {
        w3c: w3c[elementName],
        mdn: mdn[elementName],
        htmldoctor: htmldoctor[elementName],
        htmldog: htmldog[elementName],
        w3schools: w3schools[elementName]
      };

      all.push({ ...element, group: groupName, name: elementName, links });
    })
  });

  return all;
}