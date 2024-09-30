export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Use the spread syntax to include all departments and their employees
    },
    getNumberOfDepartments() {
      // Count the number of keys (departments) in employeesList
      return Object.keys(employeesList).length;
    },
  };
}
