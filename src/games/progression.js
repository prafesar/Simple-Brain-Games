import playGame from '..';
import getRandomInteger from '../utils';

const description = 'What number is missing in the progression?';
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
  const hiddenElementPosition = getRandomInteger(0, progression.length - 1);
  const issue = {};
  issue.answer = progression[hiddenElementPosition];
  const newProgression = progression.slice();
  newProgression[hiddenElementPosition] = '..';
  issue.question = newProgression.join(' ');
  return issue;
}

export default () => playGame(getIssueForProgression, description);
