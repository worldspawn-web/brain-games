#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userNameAsk } from '../src/cli.js';

console.log("Welcome to the Brain Games!");
userNameAsk();
