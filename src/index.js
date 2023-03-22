#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';

// greets user, returns username
export const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// generates random number 0-100
export const randomNumber100 = () => {
  const temp = Math.floor(Math.random() * 100);
  return temp;
};

// ends the game on third iteration
export const winLogic = (index, username) => {
  if (index === 2) {
    console.log(`Congratulations, ${username}`);
  }
};

export const wrongMsg = (userAnswer, calcNumber, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcNumber}'.`);
  console.log(`Let's try again, ${userName}`);
};
