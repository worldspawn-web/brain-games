#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (randomNumberOne, randomNumberTwo) => {
  if (randomNumberTwo > randomNumberOne) {
    return gcd(randomNumberTwo, randomNumberOne);
  }
  if (!randomNumberTwo) {
    return randomNumberOne;
  }
  return gcd(randomNumberTwo, randomNumberOne % randomNumberTwo);
};
const generateRound = () => {
  const randomNumberOne = getRandomInRange(0, 100);
  const randomNumberTwo = getRandomInRange(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = gcd(randomNumberOne, randomNumberTwo);
  return [question, answer];
};

const runBrainGcdGame = () => runEngine(rules, generateRound);

export default runBrainGcdGame;
