import playGame, { makeIssue } from '..';
import getRandomInteger from '../utils';

const isEven = number => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(
    () => {
      const gamesQuestion = getRandomInteger();
      const answer = isEven(gamesQuestion) ? 'yes' : 'no';
      return makeIssue(gamesQuestion, answer);
    },
    description,
  );
};
