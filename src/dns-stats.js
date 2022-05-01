const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   const domainsAmount = {},
  domainsReverse = [];

  domains.forEach(el => {
    domainsReverse.push(el.split('.').reverse());
  })

  domainsReverse.forEach(el => {
    let dns = '';
    for (let i = 0; i < el.length; i++) {
      dns += '.' + el[i];
      if (domainsAmount[dns]) {
        domainsAmount[dns] += 1;
      } else {
        domainsAmount[dns] = 1;
      }
    }
  })

  return domainsAmount;
}

module.exports = {
  getDNSStats
};
