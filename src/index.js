import { question } from 'readline-sync';

const getAnswer = askAny => question(askAny);

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameEven = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const rigthAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const userAnswer = getAnswer(`Question: ${number} \nYour answer: `);
    if (userAnswer === rigthAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`You loos! Sorry, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getAnswer;
