import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

const getIssueForGameCalc = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();

  const operators = '*-+';
  const operatorStr = operators[getRandomInteger(0, operators.length - 1)];
  const condition = `${n1} ${operatorStr} ${n2}`;

  let answer = 0;
  switch (operatorStr) {
    case '*':
      answer = n1 * n2;
      break;
    case '+':
      answer = n1 + n2;
      break;
    case '-':
      answer = n1 - n2;
      break;
    default:
      answer = 0;
  }
  return makeIssue(condition, answer);
};

export default () => {
  greeting();
  console.log('What is the result of the expression?\n');
  return playGame(getIssueForGameCalc);
};
