#!/usr/bin/node

const express = require('express');

// Create an Express application and assign it to the variable `app`
const app = express();

// Define a route for the root path that responds with "Hello Holberton School!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
