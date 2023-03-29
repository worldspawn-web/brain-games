#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// question for export
const rules = 'Find the greatest common divisor of given numbers.';
// calculates the correct answer
const calcAnswer = (randomNumberOne, randomNumberTwo) => {
  if (randomNumberTwo > randomNumberOne) {
    return calcAnswer(randomNumberTwo, randomNumberOne);
  }
  if (!randomNumberTwo) {
    return randomNumberOne;
  }
  return calcAnswer(randomNumberTwo, randomNumberOne % randomNumberTwo);
};
// generates basic data
const generateRound = () => {
  const randomNumberOne = getRandomInRange(0, 100);
  const randomNumberTwo = getRandomInRange(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = calcAnswer(randomNumberOne, randomNumberTwo);
  return [question, answer];
};

const runBrainGcdGame = () => runEngine(rules, generateRound);
export default runBrainGcdGame;

// for (let i = 0; i < 3; i += 1) {
//   randomNumber1 = getRandomInRange(1, 100);
//   randomNumber2 = getRandomInRange(1, 100);
//   if (randomNumber1 > randomNumber2) {
//     for (let j = randomNumber2; j > 0; j -= 1) {
//       const tempCheck1 = randomNumber1 % j;
//       const tempCheck2 = randomNumber2 % j;
//       if (tempCheck1 === 0 && tempCheck2 === 0) {
//         calcNumber = j;
//         j = 1;
//       }
//     }
//   } else if (randomNumber1 < randomNumber2) {
//     for (let k = randomNumber1; k > 0; k -= 1) {
//       const tempCheck1 = randomNumber1 % k;
//       const tempCheck2 = randomNumber2 % k;
//       if (tempCheck1 === 0 && tempCheck2 === 0) {
//         calcNumber = k;
//         k = 1;
//       }
//     }
//   }
// }
