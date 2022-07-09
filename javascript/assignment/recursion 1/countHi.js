/*Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2*/
function countHi(str){
  if (str.length == 0){
     return 0;
   }
 
   if (str.substring(0, 2) == "hi"){
     return 1 + countHi(str.substring(2))
   }
   return countHi(str.substring(1));
}