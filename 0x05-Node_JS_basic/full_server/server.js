import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

/**
 * Set up the Express server and use the defined routes.
 *
 * The server listens on port 1245 and handles all routes related to students.
 */
app.use(routes);

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
