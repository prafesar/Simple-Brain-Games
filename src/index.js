import { question as getUserAnswer } from 'readline-sync';

export const makeIssue = (question, answer) => {
  const issue = {};
  issue.question = question;
  issue.answer = answer;
  return issue;
};
const getQuestion = issue => issue.question;
const getAnswer = issue => issue.answer;

const output = str => console.log(str);

export default (f, rules = '', steps = 3) => {
  output('\nWelcome to the Brain Games!');
  output(rules);
  const userName = getUserAnswer('May I have your name? ');
  output(`Hi, ${userName}!\n`);

  for (let i = 0; i < steps; i += 1) {
    const issue = f();
    const question = getQuestion(issue);
    const answer = getAnswer(issue);
    const userAnswer = getUserAnswer(`Question: ${question} \nYour answer: `);
    if (String(userAnswer) === String(answer)) {
      output('Correct!\n');
    } else {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      output(`Let's try again, ${userName}!`);
      return false;
    }
  }
  output(`\nCongratulations, ${userName}!\n`);
  return true;
};
