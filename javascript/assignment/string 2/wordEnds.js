/*Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

Examples

wordEnds('abcXY123XYijk', 'XY') → c13i
wordEnds('XY123XY', 'XY') → 13
wordEnds('XY1XY', 'XY') → 11*/
function wordEnds(str, word){
  slen = str.length;

   wlen = word.length;

  fin = "";

  for ( i = 0; i < slen-wlen+1; i++) {

     tmp = str.substring(i,i+wlen);

    if (i > 0 && tmp==(word))

      fin += str.substring(i-1,i);

    if (i < slen-wlen && tmp==(word))

      fin += str.substring(i+wlen,i+wlen+1);

  }

  return fin;
}