import playGame from '..';
import getRandomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  const min = Math.min(a, b);
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
    const newDivisor = divisor - 1;
    return iter(newDivisor);
  };
  return iter(min);
};

function getIssueForGameGcd() {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const question = `${n1} ${n2}`;
  const answer = String(getGreatestCommonDivisor(n1, n2));
  return { question, answer };
}

export default () => playGame(getIssueForGameGcd, description);
