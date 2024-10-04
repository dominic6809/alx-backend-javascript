/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this._validateAmount(newAmount);
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency);
  }

  // Method to display the price in "amount currency_name (currency_code)" format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }

  // Validation methods
  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return currency;
  }
}
