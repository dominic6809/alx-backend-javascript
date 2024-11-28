// Defining the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const studentA: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const studentB: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California",
};

// Creating an array of students
const studentsList: Student[] = [studentA, studentB];

// Creating a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Iterating over studentsList to create table rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  // Creating cells for first name and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Appending cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Appending the row to the table body
  tbody.appendChild(row);
});

// Appending the table body to the table
table.appendChild(tbody);

// Appending the table to the document body
document.body.appendChild(table);
