import playGame, { makeIssue } from '..';
import getRandomInteger, { getGreatestCommonDivisor } from '../utils';

function getIssueForGameGcd() {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const condition = `${n1} ${n2}`;
  const answer = getGreatestCommonDivisor(n1, n2);
  return makeIssue(condition, answer);
}

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return playGame(getIssueForGameGcd, rules);
};
