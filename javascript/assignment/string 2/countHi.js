/*Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2 */
function countHi(str) {
  count = 0;

  for (i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) == "hi") count++;
  }

  return count;
}
