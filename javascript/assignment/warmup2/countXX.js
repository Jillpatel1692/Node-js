/*Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

Examples

countXX('abcxx') → 1
countXX('xxx') → 2
countXX('xxxx') → 3 */
function countXX(str){
  count = 0;
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) == 'x') {
      if (str.charAt(x + 1) == 'x') {
        count++;
      }
    }
  }
  return count++;
}