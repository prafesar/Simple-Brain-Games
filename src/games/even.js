import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

const isEven = number => number % 2 === 0;

export default () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  return playGame(
    () => {
      const gamesQuestion = getRandomInteger();
      const answer = isEven(gamesQuestion) ? 'yes' : 'no';
      return makeIssue(gamesQuestion, answer);
    },
  );
};
