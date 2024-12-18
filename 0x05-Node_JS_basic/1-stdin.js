#!/usr/bin/node
/**
 * program that:
 * should display the message Welcome to Holberton School,
 * what is your name? (followed by a new line)
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
