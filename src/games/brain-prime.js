#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (randomNumber) => {
  if (randomNumber === 0 || randomNumber === 1) {
    return false;
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainPrimeGame = () => runEngine(rules, generateRound);

export default runBrainPrimeGame;
