/*Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

Examples

countAbc('abc') → 1
countAbc('abcxxabc') → 2
countAbc('abaxxaba') → 2*/
function countAbc(str){
 if (str.length <= 2) {
     return 0;
   }
 
   if (str.substring(0, 3) === "abc" || str.substring(0, 3) === "aba"){
     return 1 + countAbc(str.substring(2));
   }
   return countAbc(str.substring(1)); 
}