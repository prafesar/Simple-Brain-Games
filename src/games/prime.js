import playGame from '..';
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
  const issue = {};
  const number = getRandomInteger();
  issue.question = number;
  issue.answer = isPrime(number) ? 'yes' : 'no';
  return issue;
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return playGame(getIssueForPrime, description);
};
