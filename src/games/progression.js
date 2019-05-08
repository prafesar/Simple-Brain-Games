import playGame, { greeting, makeIssue } from '..';
import getRandomInteger from '../utils';

function makeProgression(stepsCount = 10) {
  const progression = [];
  const startPoint = getRandomInteger();
  const step = getRandomInteger(2, 5);
  const iter = (acc, currentItem) => {
    if (acc.length === stepsCount) {
      return acc;
    }
    return iter([...acc, currentItem], currentItem + step);
  };
  return iter(progression, startPoint);
}

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
  greeting();
  console.log('What number is missing in the progression?\n');
  return playGame(getIssueForProgression);
};
