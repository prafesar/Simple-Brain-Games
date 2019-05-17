import { question as getUserAnswer } from 'readline-sync';

const steps = 3;

export default (getIssue, description = '') => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = getUserAnswer('\nMay I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < steps; i += 1) {
    const { question, answer } = getIssue();
    const userAnswer = getUserAnswer(`Question: ${question} \nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return console.log(`Let's try again, ${userName}!\n`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!\n`);
};
