import { question as getUserAnswer } from 'readline-sync';

export const makeIssue = (question, answer) => {
  const issue = {};
  issue.question = question;
  issue.answer = answer;
  return issue;
};
const getQuestion = issue => issue.question;
const getAnswer = issue => issue.answer;

export default (f, rules = '', steps = 3) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < steps; i += 1) {
    const issue = f();
    const question = getQuestion(issue);
    const answer = getAnswer(issue);
    const userAnswer = getUserAnswer(`Question: ${question} \nYour answer: `);
    if (String(userAnswer) === String(answer)) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!\n`);
};
