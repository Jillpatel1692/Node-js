/*Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.

Examples

count11('11abc11') → 2
count11('abc11x11x11') → 3
count11('111') → 1*/
function count11(str){
   if (str.length <= 1){
     return 0;
   }
 
   if (str.substring(0, 2) == "11"){
     return 1 + count11(str.substring(2))
   }
   return count11(str.substring(1));
}