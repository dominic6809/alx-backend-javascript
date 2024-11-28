/**
 * AppController handles the main application routes.
 */
export default class AppController {
  /**
   * Renders the homepage.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  static getHomepage(req, res) {
    // Responds with a 200 status code and the message
    res.status(200).send('Hello Holberton School!');
  }
}
