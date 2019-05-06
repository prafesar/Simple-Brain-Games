import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

function maxDivider(a, b) {
  const min = a >= b ? b : a;
  const iter = (divider) => {
    if (a % divider === 0 && b % divider === 0) {
      return divider;
    }
    const newDividor = divider - 1;
    return iter(newDividor);
  };
  return iter(min);
}

function getIssueForGameGcd() {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const condition = `${n1} ${n2}`;
  const answer = maxDivider(n1, n2);
  return makeIssue(condition, answer);
}

export default () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.\n');
  return playGame(getIssueForGameGcd);
};
