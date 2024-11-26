#!/usr/bin/node

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Retrieve the database path from the command line arguments
const databasePath = process.argv[2];

// Create the HTTP server and assign it to the variable `app`
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // Response for the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (parsedUrl.pathname === '/students') {
    // Response for the /students path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Call the countStudents function and handle its Promise
    countStudents(databasePath)
      .then(() => {
        // Once data is logged to console in countStudents, append a "Done" message.
        res.end();
      })
      .catch((error) => {
        // Handle errors (e.g., if the file doesn't exist)
        res.write(error.message);
        res.end();
      });
  } else {
    // Response for unknown paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
