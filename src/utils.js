export default getRandomInteger = (min = 1, max = 30) => Math.floor(
  Math.random() * (max - min + 1) + min,
);
