#!/usr/bin/env node
import readlineSync from 'readline-sync';

// greets user, returns username
export const userGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// generates random number
export const randomNumber = (maxValue) => {
  const temp = Math.floor(Math.random() * maxValue);
  return temp;
};

// ends the game on third iteration
export const winLogic = (index, username) => {
  if (index === 2) {
    console.log(`Congratulations, ${username}!`);
  }
};

export const wrongMsg = (userAnswer, calcNumber, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcNumber}'.`);
  console.log(`Let's try again, ${userName}!`);
};
