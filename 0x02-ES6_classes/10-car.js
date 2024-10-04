/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
