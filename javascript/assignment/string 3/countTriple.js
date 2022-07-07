/*We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

Examples

countTriple('abcXXXabc') → 1
countTriple('xxxabyyyycd') → 3
countTriple('a') → 0*/
function countTriple(str){
  let count = 0;

  for (let i = 0; i <= str.length-2; i++) {
    let triple = str.substring(i, i+3);
    if (triple[0] == triple[1] && triple[1] == triple[2]){
      count += 1;
    }
  }
  return count;
}