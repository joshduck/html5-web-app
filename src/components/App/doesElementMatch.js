const matchText = (text, query) => text && text.indexOf(query) !== -1;

const matchArray = (texts, query) =>
  texts && texts.some(text => matchText(text, query));

export default (element, query) => {
  return (
    matchText(element.name, query) ||
    matchText(element.group, query) ||
    matchArray(element.keywords, query)
  );
};
