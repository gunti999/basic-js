const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = [];
  if (members == null || !members.length) {return false}
  members.forEach(el => {
    if (typeof el === 'string') {
      let a = el.trim();
      str.push(a[0].toLocaleUpperCase());
    }
  })
  return str.sort().join('');
}

module.exports = {
  createDreamTeam
};
