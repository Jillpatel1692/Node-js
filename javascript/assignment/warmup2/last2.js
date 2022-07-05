/*Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

Examples

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1 */
function last2(str){
  count = 0;
  if (str.length < 2) {
    return 0;
  }
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if (sub == end) {
      count++;
    }
  }
  return count;
}