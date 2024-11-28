const express = require('express');
const app = express();

// Set up the route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Set up the route for the cart page with validation for :id as a number
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).send('Not Found');
  }

  // Respond with a message for valid cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Start the server and log a message when it starts
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
