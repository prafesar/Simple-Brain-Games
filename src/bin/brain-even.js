#!/usr/bin/env node
import getAnswer from '..';

const getRandomNumber = () => Math.floor(Math.random() * 100);

console.log('\nWelcome to the Brain Games! ');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = getAnswer('May I have your name? ');

console.log(`Hi, ${userName}!\n`);

const gameEven = (n = 3) => {
  for (let i = 0; i < n; i += 1) {
    const number = getRandomNumber();
    const rigthAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const userAnswer = getAnswer(`Question: ${number} \nYour answer: `);
    if (userAnswer === rigthAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log('You loos! Sorry!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

gameEven();
