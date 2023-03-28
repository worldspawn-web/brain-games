#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongMsg } from '../index.js';
import { winLogic } from '../index.js';
import { userGreeting } from '../index.js';
import getRandomInRange from '../utils.js';

const runBrainPrimeGame = () => {
  // greeting
  const userName = userGreeting();
  // tempvars
  let questionNumber;
  let isPrimeMsg;
  let userAnswer;

  for (let i = 0; i < 3; i += 1) {
    questionNumber = getRandomInRange(1, 100);
    for (let k = 2; k < questionNumber; k += 1) {
      if (questionNumber % k === 0) {
        isPrimeMsg = 'no';
        break;
      } else if (questionNumber % k !== 0) {
        isPrimeMsg = 'yes';
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
export default runBrainPrimeGame;
