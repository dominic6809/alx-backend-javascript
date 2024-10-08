# ES6 Data Manipulation Project

This project focuses on various ES6 concepts, particularly data manipulation using built-in data structures and methods such as `Map`, `Set`, `WeakMap`, and typed arrays. The project includes several functions that demonstrate these concepts in practical scenarios.

## Concepts Covered

1. **Array Manipulation**
   - `map`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
   - `filter`: Creates a new array with all elements that pass the test implemented by the provided function.
   - `reduce`: Executes a reducer function on each element of the array, resulting in a single output value.

2. **Typed Arrays**
   - Working with `Int8Array` and other typed arrays to handle binary data efficiently.

3. **Data Structures**
   - **Set**: A collection of values where each value must be unique.
   - **Map**: A collection of keyed data items, where keys can be of any type.
   - **WeakMap**: Similar to `Map`, but with keys that are weakly referenced, allowing for garbage collection.

## Functions Implemented

### 1. `getListStudents`
Returns an array of student objects.

### 2. `getListStudentIds`
Returns an array of student IDs from a list of student objects.

### 3. `getStudentsByLocation`
Returns an array of student objects located in a specific city.

### 4. `getStudentIdsSum`
Returns the sum of all student IDs in a given list.

### 5. `updateStudentGradeByCity`
Returns an updated array of students with their new grades based on a specific city.

### 6. `createInt8TypedArray`
Creates a new `ArrayBuffer` with an `Int8` value at a specified position.

### 7. `setFromArray`
Creates a `Set` from an array, eliminating duplicate values.

### 8. `hasValuesFromArray`
Returns a boolean indicating if all elements in an array exist within a `Set`.

### 9. `cleanSet`
Returns a string of all `Set` values that start with a specific string, separated by a hyphen.

### 10. `groceriesList`
Returns a `Map` of grocery items with their quantities.

### 11. `updateUniqueItems`
Updates the quantity of items in a `Map` where the initial quantity is `1`.

### 12. `queryAPI`
Tracks the number of times an endpoint is queried, throwing an error if it exceeds a specified limit.

## Usage

To use any of the functions, simply import them and call them with the required arguments. For example:

```javascript
import { getListStudents, updateStudentGradeByCity } from './yourModule.js';

const students = getListStudents();
const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', newGrades);
console.log(updatedStudents);
