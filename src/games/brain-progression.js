#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';
const getProgression = (randomNumber, progressionValue) => {
  const tempArray = [];
  let tempValue = 0;
  for (let i = 0; i < 10; i += 1) {
    tempArray.push(randomNumber + tempValue);
    tempValue += progressionValue;
  }
  return tempArray;
};
const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const progressionValue = getRandomInRange(1, 30);
  const progression = getProgression(randomNumber, progressionValue);
  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runBrainProgressionGame = () => runEngine(rules, generateRound);

export default runBrainProgressionGame;
