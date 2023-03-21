#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';
import { randomNumber100 } from '../index.js';
import { userGreeting } from '../index.js';

// greeting
const brainEvenGame = () => {
  const userName = userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  // temp vars to store info
  let randomNumber;
  let correctAnswer;
  let userAnswer;
  for (let i = 0; i < 3; i += 1) {
    // random generated number for every iteration
    randomNumber = randomNumber100();
    console.log(`Question: ${randomNumber}`);
    // toLowerCase() used to make comparison easy
    userAnswer = (readlineSync.question('Your answer: ')).toLowerCase();
    // correct answer logic
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    // game logic
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    // game ends on 3 correct answers
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
      break;
    }
  }
};
export default brainEvenGame;
