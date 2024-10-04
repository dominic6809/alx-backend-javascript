/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import Car from './10-car.js';

// Define private symbols for EVCar attributes
const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent constructor
    super(brand, motor, color);
    this[_range] = range; // Using Symbol to create a private attribute for range
  }

  // Getter for the range attribute
  get range() {
    return this[_range];
  }

  // Override the cloneCar method to return a Car instance
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
