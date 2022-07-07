/*Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

Examples

notReplace('is test') → is not test
notReplace('is-is') → is not-is not
notReplace('This is right') → This is not right*/
function notReplace(str){
  let result = "";

  for (let i = 0; i < str.length; i++){
       
   if ((str.charAt(i-1).match(/[a-z]/i) || i+2 < str.length && str.charAt(i+2).match(/[a-z]/i))){
        result += str[i];
      } else if (str.substring(i, i+2) == "is"){
        result += "is not";
        i++;
      } else {

        result += str[i];
      }
    }
    return result;
}