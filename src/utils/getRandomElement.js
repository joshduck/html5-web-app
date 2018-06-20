const getRandomElement = elements => {
  const values = Object.values(elements);

  // A "count" of all the weights.
  const total = values.reduce((total, element) => total + element.weight, 0);

  // Pick a random point from 0 => count and return the element that
  // occupies that position.
  let target = Math.random() * total;
  const random = values.find(element => {
    target -= element.weight;
    return target <= 0;
  });

  return random.name;
};

export default getRandomElement;
