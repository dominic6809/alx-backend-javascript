export default class Currency {
  constructor(code, name) {
    this._code = this._validateCode(code);
    this._name = this._validateName(name);
  }

  // Getter and Setter for code.
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._validateCode(newCode);
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateName(newName);
  }

  // Method to display the currency in "name (code)" format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation methods
  static _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }
}
