export default function* createIteratorObject(report) {
  // Loop through each department in allEmployees
  for (const department of Object.values(report.allEmployees)) {
    // Loop through each employee in the department
    for (const employee of department) {
      yield employee; // Yield each employee
    }
  }
}
