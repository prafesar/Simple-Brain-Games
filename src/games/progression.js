import playGame, { makeIssue } from '..';
import getRandomInteger, { makeProgression } from '../utils';

function getIssueForProgression() {
  const progression = makeProgression();
  // get random item of progression and hide it
  const itemToHide = getRandomInteger(0, progression.length - 1);
  const answer = progression[itemToHide];
  const newProgression = progression.slice();
  newProgression[itemToHide] = '..';
  const condition = newProgression.join(' ');
  return makeIssue(condition, answer);
}

export default () => {
  const rules = 'What number is missing in the progression?';
  return playGame(getIssueForProgression, rules);
};
