import playGame from '..';
import getRandomInteger from '../utils';

const description = 'What is the result of the expression?';
const operators = '*-+';

const getIssueForGameCalc = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const operatorStr = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${n1} ${operatorStr} ${n2}`;
  let answer;
  switch (operatorStr) {
    case '*':
      answer = String(n1 * n2);
      break;
    case '+':
      answer = String(n1 + n2);
      break;
    case '-':
      answer = String(n1 - n2);
      break;
    default:
      answer = '';
  }
  return { question, answer };
};

export default () => playGame(getIssueForGameCalc, description);
