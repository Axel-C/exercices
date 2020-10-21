const prompt = require('prompt-sync')();
const {countPairs} = require('./service');

const numbers = prompt('Enter the numbers separated by "," :').split(',').map(x => parseInt(x ,10));
const k = parseInt(prompt("Enter k : "))
console.log(countPairs(numbers , k));