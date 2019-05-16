import playGame, { makeIssue } from '..';
import getRandomInteger from '../utils';

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getIssueForPrime = () => {
  const condition = getRandomInteger();
  const answer = isPrime(condition) ? 'yes' : 'no';
  return makeIssue(condition, answer);
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return playGame(getIssueForPrime, description);
};
