const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 if (!Array.isArray(arr)) {
    throw Error ();
  }

  let transformArray = [];

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case ('--discard-prev'):
        if (i === 0) {
          break;
        }
        if (arr[i - 2] !== '--discard-next') {
          transformArray.pop();
        }
        break;

      case ('--discard-next'):
        if (i === arr.length - 1) {
          break;
        } else {
          i++;
        }
        break;

      case ('--double-prev'):
        if (i === 0) {
          break;
        }
        if (arr[i - 2] !== '--discard-next') {
          transformArray.push(arr[i - 1]);
        }
        break;

      case ('--double-next'):
        if (i === arr.length - 1) {
          break;
        } else {
          transformArray.push(arr[i + 1]);
        }
        break;

      default:
        transformArray.push(arr[i]);
    }
  }
  
  return transformArray;
};

module.exports = {
  transform
};
