/*Given a string and a non-empty substring sub, compute recursively the largest substring which starts and ends with sub and return its length.

Examples

strDist('catcowcat', 'cat') → 9
strDist('catcowcat', 'cow') → 3
strDist('cccatcowcatxx', 'cat') → 9*/
function strDist(str, sub){
  if (str.length <= sub.length){
         if (str == sub){
         return str.length;
       } else {
           return 0;
       }
   }
 
   if (str.substring(0, sub.length) == sub && str.substring(str.length-sub.length) == sub){
     return str.length;
   }
 
   if (str.substring(0, sub.length) == sub){
     return strDist(str.substring(0, str.length-1), sub);
   }
 
    if (str.substring(str.length-sub.length) == sub){
     return strDist(str.substring(1), sub);
   }
 
   return strDist(str.substring(1, str.length-1), sub);
}