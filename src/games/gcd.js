import playGame from '..';
import getRandomInteger from '../utils';

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

function getIssueForGameGcd() {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const issue = {};
  issue.question = `${n1} ${n2}`;
  issue.answer = getGreatestCommonDivisor(n1, n2);
  return issue;
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return playGame(getIssueForGameGcd, description);
};
