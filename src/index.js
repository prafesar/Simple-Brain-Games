import { question as getUserAnswer } from 'readline-sync';

const steps = 3;

export default (getIssue, description = '') => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < steps; i += 1) {
    const issue = getIssue();
    const userAnswer = getUserAnswer(`Question: ${issue.question} \nYour answer: `);
    if (String(userAnswer) === String(issue.answer)) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${issue.answer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`\nCongratulations, ${userName}!\n`);
};
