#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (randomNumber) => {
  if (randomNumber % 2 !== 0) {
    return false;
  }
  return true;
};
const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainEvenGame = () => runEngine(rules, generateRound);

export default runBrainEvenGame;
