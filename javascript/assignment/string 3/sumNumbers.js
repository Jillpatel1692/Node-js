/*Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

Examples

sumNumbers('abc123xyz') → 123
sumNumbers('aa11b33') → 44
sumNumbers('7 11') → 18*/
function sumNumbers(str){
  let len = str.length;
  let temp = "";
  let sum = 0;

  for (let i = 0; i < str.length; i++){
    if (parseInt(str[i])){
      if (i < len-1 && parseInt(str[i+1])){
        temp+= str[i]
      } else {
        temp+= str[i]
        sum += parseInt(temp);
        temp="";
      }
    }
  }
  return sum;
}