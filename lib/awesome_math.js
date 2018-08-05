/**
 * @function
 * Awesome Mathematics
 */
let awesomeMathematics = (module.exports = function () {});

/**
 * Generate Fibonacci series
 * @param Number last number in the Fibonacci series
 * @return Array Fibonacci series of numbers
 */
awesomeMathematics.prototype.fibonacciSeries = function (string) {
  const limit = Number(string); // strictly cast into number
  if (limit <= 1) return []; // return empty array if number limit is 1 or less

  let result = [1, 1]; // the minimum result if number limit is greater than 2
  function sumOfLastTwoNumbers () {
    return result[result.length - 1] + result[result.length - 2];
  }
  while (sumOfLastTwoNumbers() < limit) {
    result.push(sumOfLastTwoNumbers());
  }
  return result;
};

module.exports = awesomeMathematics;
