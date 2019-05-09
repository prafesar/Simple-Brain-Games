const getRandomInteger = (min = 1, max = 30) => Math.floor(
  Math.random() * (max - min + 1) + min,
);

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const makeProgression = (stepsCount = 10) => {
  const progression = [];
  const startPoint = getRandomInteger();
  const step = getRandomInteger(2, 5);
  const iter = (acc, currentItem) => {
    if (acc.length === stepsCount) {
      return acc;
    }
    return iter([...acc, currentItem], currentItem + step);
  };
  return iter(progression, startPoint);
};

export const getGreatestCommonDivisor = (a, b) => {
  const min = a >= b ? b : a;
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
    const newDivisor = divisor - 1;
    return iter(newDivisor);
  };
  return iter(min);
};

export default getRandomInteger;
