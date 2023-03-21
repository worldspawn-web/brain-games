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

export const randomNumber100 = () => {
  const temp = Math.floor(Math.random() * 100);
  return temp;
};