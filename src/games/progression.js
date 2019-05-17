import playGame from '..';
import getRandomInteger from '../utils';

const description = 'What number is missing in the progression?';

const makeProgression = (startElement, step, stepsCount) => {
  const progression = [];
  const iter = (acc, currentItem) => {
    if (acc.length === stepsCount) {
      return acc;
    }
    return iter([...acc, currentItem], currentItem + step);
  };
  return iter(progression, startElement);
};

function getIssueForProgression() {
  const progression = makeProgression(5, 4, 10);
  const hiddenElementPosition = getRandomInteger(0, progression.length - 1);
  const answer = String(progression[hiddenElementPosition]);

  const newProgression = progression.slice();
  newProgression[hiddenElementPosition] = '..';
  const question = newProgression.join(' ');

  return { question, answer };
}

export default () => playGame(getIssueForProgression, description);
