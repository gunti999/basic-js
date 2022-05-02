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
  let Obj = {};
  let url = domains.map(el => el.split(".").reverse().map(dom => `.${dom}`));
  url.forEach((d) => {
    let domainName = "";
    d.forEach(dEl => {
      domainName += dEl;
      !Obj[domainName] ? Obj[domainName] = 1 : Obj[domainName]++;
    });
  });
  return Obj;
}

module.exports = {
  getDNSStats
};
