#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';
const randomSign = () => {
  const mathSigns = ['+', '-', '*'];
  return mathSigns[getRandomInRange(0, mathSigns.length - 1)];
};
const calcAnswer = (randomNumberOne, randomNumberTwo, mathSign) => {
  switch (mathSign) {
    case '+':
      return randomNumberOne + randomNumberTwo;
    case '-':
      return randomNumberOne - randomNumberTwo;
    case '*':
      return randomNumberOne * randomNumberTwo;
    default:
      throw new Error(`Something is wrong with math sign! (value: ${mathSign})`);
  }
};
const generateRound = () => {
  const randomNumberOne = getRandomInRange(0, 100);
  const randomNumberTwo = getRandomInRange(0, 100);
  const mathSign = randomSign();
  const question = `${randomNumberOne} ${mathSign} ${randomNumberTwo}`;
  const answer = calcAnswer(randomNumberOne, randomNumberTwo, mathSign);
  return [question, answer];
};

const runBrainCalcGame = () => runEngine(rules, generateRound);

export default runBrainCalcGame;
