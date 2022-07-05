/*Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

Examples

stringBits('Hello') → Hlo
stringBits('Hi') → H
stringBits('Heeololeo') → Hello */
function stringBits(str){
  r = '';
  for (x = 0; x < str.length; x += 2) {
    r = r + str.substring(x, x + 1);
  }
  return r;
}