/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateSize(size);
    this._location = this._validateLocation(location);
  }

  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Casting the class to a Number should return the size
  valueOf() {
    return this._size;
  }

  // Casting the class to a String should return the location
  toString() {
    return this._location;
  }

  // Validation for size (must be a number)
  _validateSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    return size;
  }

  // Validation for location (must be a string)
  _validateLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    return location;
  }
}
