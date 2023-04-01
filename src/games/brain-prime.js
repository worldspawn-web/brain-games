#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const calcAnswer = (randomNumber) => {
  if (randomNumber === 0 || randomNumber === 1) {
    return 'no';
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = `${randomNumber}`;
  const answer = calcAnswer(randomNumber);
  return [question, answer];
};

const runBrainPrimeGame = () => runEngine(rules, generateRound);

export default runBrainPrimeGame;
