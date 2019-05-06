import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

const getIssueForGameGcd = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const condition = `${n1} ${n2}`;

  return makeIssue(condition, answer);
};

export default () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.\n');
  return playGame(getIssueForGameGsd);
};
