/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// Define private symbols for attributes
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;  // Using Symbol to create a private attribute
    this[_motor] = motor;  // Using Symbol to create a private attribute
    this[_color] = color;
  }

  // Getters for each attribute
  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  // Method to clone the car object
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
