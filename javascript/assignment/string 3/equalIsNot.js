/*Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

Examples

equalIsNot('This is not') → false
equalIsNot('This is notnot') → true
equalIsNot('noisxxnotyynotxisi') → true*/
function equalIsNot(str){
  let is = "is";
  let not = "not";

  let isCount = 0;
  let notCount = 0;

  for (let i = 0; i < str.length; i++) {
      let checkIs = str.substring(i, i+is.length);
      let checkNot = str.substring(i, i+not.length);

      if (checkIs == is){
        isCount += 1;
      }

      if (checkNot == not){
        notCount += 1;
      }
  }

  return isCount == notCount;
}