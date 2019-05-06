import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

function maxDivisor(a, b) {
  const min = a >= b ? b : a;
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
    const newDivisor = divisor - 1;
    return iter(newDivisor);
  };
  return iter(min);
}

function getIssueForGameGcd() {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const condition = `${n1} ${n2}`;
  const answer = maxDivisor(n1, n2);
  return makeIssue(condition, answer);
}

export default () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.\n');
  return playGame(getIssueForGameGcd);
};
