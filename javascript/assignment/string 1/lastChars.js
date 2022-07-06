/*Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

Examples

lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@ */
function lastChars(a, b){
 if(a.length == 0)
 {
    a = "@";
 }
  if(b.length == 0)
  {
    b = "@";
  }
  
  return a.substring(0,1) + b.substring(b.length-1, b.length);
 
}