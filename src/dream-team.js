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
  if(!Array.isArray(members)) return false;
  let resMembers = [];
  for (let member of members){
    if(typeof member === "string") resMembers.push(member.trim().toUpperCase());    
 }
  resMembers.sort();
  let dreamTeam = '';
  for(let member of resMembers){   
    if(typeof member === "string") dreamTeam =dreamTeam + member[0];
  }
  return dreamTeam;
}
module.exports = {
  createDreamTeam
};
