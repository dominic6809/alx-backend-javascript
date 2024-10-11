// main.ts

// Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: "Dominic",
  lastName: "Muuo",
  age: 20,
  location: "Kenya",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California",
};

// Creating an array of students
const studentsList: Student[] = [student1, student2];

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
