import playGame from '..';
import getRandomInteger from '../utils';

const description = 'What is the result of the expression?';
const operators = '*-+';

const getIssueForGameCalc = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const operatorStr = operators[getRandomInteger(0, operators.length - 1)];

  const issue = {};
  issue.question = `${n1} ${operatorStr} ${n2}`;

  switch (operatorStr) {
    case '*':
      issue.answer = n1 * n2;
      break;
    case '+':
      issue.answer = n1 + n2;
      break;
    case '-':
      issue.answer = n1 - n2;
      break;
    default:
      issue.answer = 0;
  }
  return issue;
};

export default () => playGame(getIssueForGameCalc, description);
