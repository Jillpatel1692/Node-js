/*Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

Examples

plusOut('12xy34', 'xy') → ++xy++
plusOut('12xy34', '1') → 1+++++
plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy*/
function plusOut(str, word){

   slen = str.length;

  wlen = word.length;

  fin = "";

  for ( i = 0; i < slen; i++) {
    if (i <= slen - wlen) {
       tmp = str.substring(i,i+wlen);
      if (tmp==(word)) {
        fin += word;
        i += wlen-1;
      }
      else
        fin += "+";
    }

    else

      fin += "+";

  }
  return fin;
}
}