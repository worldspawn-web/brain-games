#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// question for export
const rules = 'What number is missing in the progression?';
// creates array
const getProgressionArray = (randomNumber, progressionValue) => {
  const tempArray = [];
  // for progression value
  let tempValue = 0;
  // pushes basic data to array
  for (let i = 0; i < 10; i += 1) {
    tempArray.push(randomNumber + tempValue);
    tempValue += progressionValue;
  }
  return tempArray;
};
// generates basic data
const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const progressionValue = getRandomInRange(1, 30);
  // gets array
  const progression = getProgressionArray(randomNumber, progressionValue);
  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  // saves the answer...
  const answer = progression[hiddenIndex];
  // ...and only after that, replaces the correct answer
  progression[hiddenIndex] = '..';
  const question = `${progression}`;
  return [question, answer];
};

const runBrainProgressionGame = () => runEngine(rules, generateRound);
export default runBrainProgressionGame;
