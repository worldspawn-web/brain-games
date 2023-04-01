#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const calcAnswer = (randomNumberOne, randomNumberTwo) => {
  if (randomNumberTwo > randomNumberOne) {
    return calcAnswer(randomNumberTwo, randomNumberOne);
  }
  if (!randomNumberTwo) {
    return randomNumberOne;
  }
  return calcAnswer(randomNumberTwo, randomNumberOne % randomNumberTwo);
};
const generateRound = () => {
  const randomNumberOne = getRandomInRange(0, 100);
  const randomNumberTwo = getRandomInRange(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = calcAnswer(randomNumberOne, randomNumberTwo);
  return [question, answer];
};

const runBrainGcdGame = () => runEngine(rules, generateRound);

export default runBrainGcdGame;
