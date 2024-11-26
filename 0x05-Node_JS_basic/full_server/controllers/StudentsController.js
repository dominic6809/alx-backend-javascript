import readDatabase from '../utils';

/**
 * StudentsController handles the student-related routes.
 */
export default class StudentsController {
  /**
   * Renders all students sorted by their major.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      res.status(200).write('This is the list of our students\n');

      // Sort the fields alphabetically
      Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const names = fields[field].join(', ');
          res.write(`Number of students in ${field}: ${fields[field].length}. List: ${names}\n`);
        });

      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Renders students based on the specified major.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      const names = fields[major] ? fields[major].join(', ') : '';
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      // Respond with an error if the database can't be loaded
      res.status(500).send('Cannot load the database');
    }
  }
}
