#!/usr/bin/env node
import { getAnswer } from '..';

console.log('\nWelcome to the Brain Games!\n');

const userName = getAnswer('May I have your name? ');
console.log(`Hi ${userName}!`);
