import { question as getUserAnswer } from 'readline-sync';

export const makeIssue = (question, answer) => {
  const issue = {};
  issue.question = question;
  issue.answer = answer;
  return issue;
};
export const getQuestion = issue => issue.question;
export const getAnswer = issue => issue.answer;

export const greeting = () => console.log('\nWelcome to the Brain Games!');

export const getRandomInteger = (min = 1, max = 30) => Math.floor(
  Math.random() * (max - min + 1) + min,
);

export default (f) => {
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const issue = f();
    const question = getQuestion(issue);
    const answer = getAnswer(issue);
    const userAnswer = getUserAnswer(`Question: ${question} \nYour answer: `);
    // eslint-disable-next-line eqeqeq
    if (userAnswer == answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. 
        Correct answer was '${answer}'\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!\n`);
};
