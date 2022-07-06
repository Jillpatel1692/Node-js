/*Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

Examples

middleTwo('string') →
middleTwo('code') →
middleTwo('Practice') → */
function middleTwo(str){
    if (str.length % 2 == 0) {
    temp = str.substring(str.length);
    mid = temp.substring(0, 2);
    return mid;
  }
  return str;
}