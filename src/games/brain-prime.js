#!/usr/bin/env node
/* eslint-disable import/no-duplicates */
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';
import { wrongMsg } from '../index.js';
import { winLogic } from '../index.js';
import { randomNumber } from '../index.js';
import { userGreeting } from '../index.js';

const brainPrimeGame = () => {
  // greeting
  const userName = userGreeting();
  // tempvars
  let questionNumber;
  let isPrimeMsg = 'yes';
  let userAnswer;

  for (let i = 0; i < 3; i += 1) {
    questionNumber = randomNumber(100);
    for (let k = 2; k < questionNumber; k += 1) {
      if (questionNumber % k === 0) {
        isPrimeMsg = 'no';
        break;
      }
    }
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === isPrimeMsg) {
      console.log('Correct!');
    } else {
      wrongMsg(userAnswer, isPrimeMsg, userName);
      break;
    }
    // game ends on win
    winLogic(i, userName);
  }
};
export default brainPrimeGame;
