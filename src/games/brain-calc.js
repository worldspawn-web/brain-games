#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';
import { randomNumber100 } from '../index.js';
import { userGreeting } from '../index.js';

const brainCalcGame = () => {
  // greeting
  const userName = userGreeting();
  // tempvars
  let randomNumberOne;
  let randomNumberTwo;
  const mathSigns = ['+', '-', '*'];
  let randomSign;
  let userAnswer;
  for (let i = 0; i < 3; i += 1) {
    console.log('What is the result of the expression?');
    // two random gen numbers
    randomNumberOne = randomNumber100();
    randomNumberTwo = randomNumber100();
    // get a random value from mathSigns array
    randomSign = mathSigns[Math.floor(Math.random() * 3)];
    console.log(`Question: ${randomNumberOne} ${randomSign} ${randomNumberTwo}`);
    userAnswer = readlineSync.question('Your answer: ');
    // empty storage for calculated answer
    let calcAnswer;
    // checks how to calculate depends on random sign array
    if (randomSign === mathSigns[0]) {
      calcAnswer = randomNumberOne + randomNumberTwo;
    } else if (randomSign === mathSigns[1]) {
      calcAnswer = randomNumberOne - randomNumberTwo;
    } else if (randomSign === mathSigns[2]) {
      calcAnswer = randomNumberOne * randomNumberTwo;
    }
    // game logic
    if (userAnswer === calcAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    // game ends on win
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
      break;
    }
  }
};
export default brainCalcGame;
