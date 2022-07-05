/*Given a string, return true if the string starts with 'hi'and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false */
function startHi(str){
  if (str.length < 2) {
    return false;
  }
  hi = str.substring(0, 2);
  if (hi == 'hi') {
    return true;
  } else {
    return false;
  }
}