/*Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.

Examples

stringMatch('xxcaazz', 'xxbaaz') → 3
stringMatch('abc', 'abc') → 2
stringMatch('abc', 'axc') → 0 */
function stringMatch(a, b){
  length = Math.min(a.length, b.length);
  count = 0;
  for (x = 0; x < length - 1; x++) {
    aSub = a.substring(x, x + 2);
    bSub = b.substring(x, x + 2);
    if (aSub == bSub) {
      count++;
    }
  }
  return count;
}