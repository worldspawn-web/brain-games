#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const calcAnswer = (randomNumber) => {
  if (randomNumber % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};
const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = `${randomNumber}`;
  const answer = calcAnswer(randomNumber);
  return [question, answer];
};

const runBrainEvenGame = () => runEngine(rules, generateRound);

export default runBrainEvenGame;
