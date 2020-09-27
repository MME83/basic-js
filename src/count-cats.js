const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  const cats = '^^';
  let numberCats = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === cats) {
        numberCats += 1;        
      }
    }
  }

  return numberCats;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
