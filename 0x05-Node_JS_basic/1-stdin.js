#!/usr/bin/node

// Import the readline module to handle input/output
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial prompt message
console.log('Welcome to Holberton School, what is your name?');

// Listen for input from the user
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
