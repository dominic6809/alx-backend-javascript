/* eslint-disable import/extensions */
import getBudgetObject from './7-getBudgetObject.js';

// Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
