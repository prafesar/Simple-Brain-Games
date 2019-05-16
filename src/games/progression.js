import playGame, { makeIssue } from '..';
import getRandomInteger from '../utils';

const stepsCount = 10;

const makeProgression = () => {
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
};

function getIssueForProgression() {
  const progression = makeProgression();
  // get random item of progression and hide it
  const hiddenElementPosition = getRandomInteger(0, progression.length - 1);
  const answer = progression[hiddenElementPosition];
  const newProgression = progression.slice();
  newProgression[hiddenElementPosition] = '..';
  const condition = newProgression.join(' ');
  return makeIssue(condition, answer);
}

export default () => {
  const description = 'What number is missing in the progression?';
  return playGame(getIssueForProgression, description);
};
