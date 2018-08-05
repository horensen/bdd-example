const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

let lastNumber;
let result;

Given('{string} as the last number in the fibonacci series', function (string) {
  lastNumber = Number(string);
});

When('I ask to generate it', function () {
  result = this.AwesomeMath.fibonacciSeries(lastNumber);
});

Then('it should give me {string}', function (expectedString) {
  expect(result).to.deep.equal(JSON.parse(expectedString));
});
