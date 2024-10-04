/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

export default class Building {
  constructor(sqft) {
    this._sqft = this._validateSqft(sqft);

    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to validate sqft
  _validateSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    return sqft;
  }
}
