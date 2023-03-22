#!/usr/bin/env node
/* eslint-disable import/no-duplicates */
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';
import { wrongMsg } from '../index.js';
import { winLogic } from '../index.js';
import { randomNumber } from '../index.js';
import { userGreeting } from '../index.js';

const brainProgressionGame = () => {
  // greeting
  const userName = userGreeting();
  // tempvars
  let firstRandNumber;
  let progressionValue;
  let calcAnswer;
  let userAnswer;
  for (let i = 0; i < 3; i += 1) {
    // generates random first item of array
    firstRandNumber = randomNumber(100);
    // diff between [0] and [1]
    progressionValue = randomNumber(20);
    // makes an array empty for each iteration
    const resultArray = [firstRandNumber];
    // pushes 10 numbers to the brand new fresh array
    for (let j = 0; j < 10; j += 1) {
      firstRandNumber += progressionValue;
      resultArray.push(firstRandNumber);
    }
    // tempvar to store the index of chosen item
    const skipStorage = randomNumber(10);
    // saves the answer from array index
    calcAnswer = resultArray[skipStorage];
    // replaces the answer with dots
    resultArray[skipStorage] = '...';

    console.log('What number is missing in this progression?');
    console.log(`Question: ${resultArray.join(' ')}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === calcAnswer.toString()) {
      console.log('Correct!');
    } else {
      wrongMsg(userAnswer, calcAnswer, userName);
      break;
    }
    // game ends on win
    winLogic(i, userName);
  }
};
export default brainProgressionGame;
