/*Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

Examples

stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx */
function stringX(str){
 r = '';
  f = str.substring(0, 1);
  e = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== 'x') {
      r += str.charAt(i);
    }
  }
  return f + r + e; 
}