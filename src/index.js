import { question } from 'readline-sync';

export const getAnswer = askAny => question(askAny);

export const getRandomNumber = () => Math.floor(Math.random() * 100);
