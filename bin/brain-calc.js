#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
import readlineSync from 'readline-sync';

// greeting
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// tempvars
let randomNumberOne;
let randomNumberTwo;
const mathSigns = ['+', '-', '*'];
let randomSign;
let userAnswer;

for (let i = 0; i < 3; i += 1) {
  console.log('What is the result of the expression?');
  // two random gen numbers
  randomNumberOne = Math.floor(Math.random() * 100);
  randomNumberTwo = Math.floor(Math.random() * 100);
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
