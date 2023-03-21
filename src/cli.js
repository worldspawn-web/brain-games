/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import readlineSync from 'readline-sync';

export const userNameAsk = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
