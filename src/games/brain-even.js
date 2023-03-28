#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { wrongMsg } from '../index.js';
import { winLogic } from '../index.js';
import { randomNumber } from '../index.js';
import { userGreeting } from '../index.js';

// greeting
const runBrainEvenGame = () => {
  const userName = userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // temp vars to store info
  let firstRandomNumber;
  let correctAnswer;
  let userAnswer;
  for (let i = 0; i < 3; i += 1) {
    // random generated number for every iteration
    firstRandomNumber = randomNumber(100);
    console.log(`Question: ${firstRandomNumber}`);
    // toLowerCase() used to make comparison easy
    userAnswer = (readlineSync.question('Your answer: ')).toLowerCase();
    // correct answer logic
    if (firstRandomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    // game logic
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      wrongMsg(userAnswer, correctAnswer, userName);
      break;
    }
    // game ends on 3 correct answers
    winLogic(i, userName);
  }
};
export default runBrainEvenGame;
