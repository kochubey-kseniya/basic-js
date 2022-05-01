const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString(),
      arr = [];
  for (let i = 0; i < str.length; i++) {
    let arr = str.split('');
    arr.splice(i, 1);
    arr.push(+arr.join(''));
  }

  return arr.sort((a, b) => b-a)[0]
}

module.exports = {
  deleteDigit
};
