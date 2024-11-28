#!/usr/bin/node

const fs = require('fs');

/**
 * Counts the number of students in each field and logs information to the console.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and filter out any empty lines
    const lines = data.trim().split('\n').filter((line) => line);

    // Remove the header row
    const headers = lines.shift();

    if (!headers) throw new Error('Cannot load the database');

    // Initialize student count and an object to store counts by field
    const students = lines.map((line) => line.split(','));
    const studentCount = students.length;
    const fields = {};

    // Process each student
    students.forEach((student) => {
      const field = student[3];
      const firstName = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    console.log(`Number of students: ${studentCount}`);

    // Log number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      const countMessage = `Number of students in ${field}: ${names.length}.`;
      const listMessage = `List: ${names.join(', ')}`;
      console.log(`${countMessage} ${listMessage}`);
    }
  } catch (error) {
    // Handle file read error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
