import playGame from '..';
import getRandomInteger from '../utils';

const isEven = number => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(
    () => {
      const issue = {};
      const number = getRandomInteger();
      issue.question = number;
      issue.answer = isEven(number) ? 'yes' : 'no';
      return issue;
    },
    description,
  );
};
