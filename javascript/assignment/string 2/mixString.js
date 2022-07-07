/*Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

Examples

mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre */
function mixString(a, b){
    min = Math.min(a.length,b.length);
   mix= "";
    for( i = 0; i < min; i++) {
      mix = mix + a.charAt(i) + b.charAt(i);
    }
    return mix = mix + b.substring(min) + a.substring(min);
 
}