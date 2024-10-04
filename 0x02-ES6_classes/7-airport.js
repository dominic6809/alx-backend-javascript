/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

export default class Airport {
  constructor(name, code) {
    this._name = this._validateName(name);
    this._code = this._validateCode(code);
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override toString to return the airport code
  toString() {
    return this._code;
  }

  // Validation methods
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }
}
