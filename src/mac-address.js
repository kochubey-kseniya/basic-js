const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
 const str_Mac = '0123456789ABCDEF';
  const val = n.split('-').map(el => {
    if (el.length !== 2) { el = 'false'; }
    else if (str_Mac.includes(el[0]) && str_Mac.includes(el[1])) {
      el = 'true';
    } else {
      el = 'false'
    }
    return el;
  });
  return val.includes('false') ? false : true;
}
module.exports = {
  isMAC48Address
};
