const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  
  // remove line with error and write your code here

  let teamName = '';
  
  if (typeof(members) != 'object' || !members) {
    return false;
  } else {

    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i][j].match(/[A-Z,a-z]/)) {
            teamName += members[i][j];
            break;
          }
        } 
      }
    }

    return teamName.toUpperCase().split('').sort().join('');
  }
};
