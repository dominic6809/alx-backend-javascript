/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    this._floors = this._validateFloors(floors); // Validate and set floors
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  // Validation method for floors
  _validateFloors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    return floors;
  }
}
