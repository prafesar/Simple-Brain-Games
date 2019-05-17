import playGame from '..';
import getRandomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getIssueForPrime = () => {
  const number = getRandomInteger();
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

export default () => playGame(getIssueForPrime, description);
