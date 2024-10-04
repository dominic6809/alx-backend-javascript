/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

export class HolbertonClass {
  constructor(year, location) {
    this._year = this._validateYear(year);
    this._location = this._validateLocation(location);
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }

  // Validation for year (must be a number)
  _validateYear(year) {
    if (typeof year !== 'number') {
      throw new TypeError('Year must be a number');
    }
    return year;
  }

  // Validation for location (must be a string)
  _validateLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    return location;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
