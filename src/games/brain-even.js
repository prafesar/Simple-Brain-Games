import playGame, {
  greeting, getRandomInteger, makeIssue,
} from '..';

export default () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  return playGame(
    () => {
      const number = getRandomInteger();
      const answer = number % 2 === 0 ? 'yes' : 'no';
      return makeIssue(number, answer);
    },
  );
};
