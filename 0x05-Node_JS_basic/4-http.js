#!/usr/bin/node

const http = require('http');

// Create the HTTP server and assign it to the variable `app`
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.setHeader('Content-Type', 'text/plain');

  // Write the response message
  res.write('Hello Holberton School!');

  res.end();
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
