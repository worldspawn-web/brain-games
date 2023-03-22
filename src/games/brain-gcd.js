#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: off */
import readlineSync from 'readline-sync';
import { userGreeting } from "../index.js";
import { randomNumber100 } from '../index.js';

const brainGcdGame = () => {
  // greeting
  const userName = userGreeting();
  // tempvars
  let randomNumber1;
  let randomNumber2;
  let calcNumber;
  let userAnswer;

  console.log('Find the greatest common divisor if given numbers.');
  for (let i = 0; i < 3; i += 1) {
    randomNumber1 = randomNumber100();
    randomNumber2 = randomNumber100();
    if (randomNumber1 > randomNumber2) {
      for (let j = randomNumber2; j > 0; j -= 1) {
        const tempCheck1 = randomNumber1 % j;
        const tempCheck2 = randomNumber2 % j;
        if (tempCheck1 === 0 && tempCheck2 === 0) {
          calcNumber = j;
          j = 0;
        }
      }
    } else if (randomNumber1 < randomNumber2) {
      for (let k = randomNumber1; k > 0; k -= 1) {
        const tempCheck1 = randomNumber1 % k;
        const tempCheck2 = randomNumber2 % k;
        if (tempCheck1 === 0 && tempCheck2 === 0) {
          calcNumber = i;
          k = 0;
        }
      }
    }

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    userAnswer = readlineSync.question('Your answer: ');
    // gamelogic
    if (userAnswer === calcNumber.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcNumber}'.`);
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
export default brainGcdGame;
