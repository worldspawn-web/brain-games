#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// question for export
const rules = 'What is the result of the expression?';
// picks a random sign
const randomSign = () => {
  const mathSigns = ['+', '-', '*'];
  const selectedSignIndex = getRandomInRange(0, mathSigns.length - 1);
  return mathSigns[selectedSignIndex];
};
// calculates the correct answer
const calcAnswer = (randomNumberOne, randomNumberTwo, mathSign) => {
  switch (mathSign) {
    case '+':
      return randomNumberOne + randomNumberTwo;
    case '-':
      return randomNumberOne - randomNumberTwo;
    case '*':
      return randomNumberOne * randomNumberTwo;
    default:
      return `Something is wrong with math sign! (value: ${mathSign})`;
  }
};
// generates basic data
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
