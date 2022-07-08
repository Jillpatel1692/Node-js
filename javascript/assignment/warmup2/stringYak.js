/*Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

Examples

stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya*/
function stringYak(str){
  r = '';
  for (x = 0; x < str.length; x++) {
    if (x + 2 < str.length && str.charAt(x) == 'y' && str.charAt(x + 2) == 'k') {
      x = x + 2;
    } else {
      r = r + str.charAt(x);
    }
  }
  return r;
}