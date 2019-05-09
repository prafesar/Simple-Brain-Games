import playGame, { makeIssue } from '..';
import getRandomInteger, { isPrime } from '../utils';

const getIssueForPrime = () => {
  const condition = getRandomInteger();
  const answer = isPrime(condition) ? 'yes' : 'no';
  return makeIssue(condition, answer);
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return playGame(getIssueForPrime, rules);
};
