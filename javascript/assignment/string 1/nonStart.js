/*Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

Examples

nonStart('Hello', 'There') → ellohere
nonStart('java', 'code') → avaode
nonStart('shotl', 'java') → hotlava */
function nonStart(a, b){
  a = a.substring(1, a.length);
  b = b.substring(1, b.length);
  return a + b;
}