const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = [],
      s2_copy = s2.split('');

  for (let i = 0; i < s1.length; i++) {
    if (s2_copy.indexOf(s1[i]) >= 0) {
      arr.push(s1[i]);
      s2_copy.splice(s2_copy.indexOf(s1[i]), 1)
    }
  }
  return arr.length
}

module.exports = {
  getCommonCharacterCount
};
