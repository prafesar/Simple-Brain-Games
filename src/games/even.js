import playGame from '..';
import getRandomInteger from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const makeIssueForIsEven = () => {
  const number = getRandomInteger();
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

export default () => playGame(makeIssueForIsEven, description);
