const matchText = (text, query) =>
  text && text.toLowerCase().indexOf(query) !== -1;

const matchArray = (texts, query) =>
  texts && texts.some(text => matchText(text, query));

export default (element, query) => {
  query = query.toLowerCase().replace(/(^\s+|\s+$|[^\w ])/g, "");

  return (
    matchText(element.name, query) ||
    matchText(element.group, query) ||
    matchArray(element.keywords, query)
  );
};
