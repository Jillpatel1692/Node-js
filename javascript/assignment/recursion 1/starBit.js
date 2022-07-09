/*This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*".

Examples

starBit('xyz,-abc*123') → -abc*
starBit('x,-hello*') → -hello*
starBit(',-xy*1') → -xy**/
function starBit(str){
  if (str.charAt(0) == "-" && str.charAt(str.length - 1) == "*"){
     return str;
   }
 
   if (str.charAt(str.length-1) == "*"){
     return starBit(str.substring(1));
   }
 
   if (str.charAt(0) == "-"){
     return starBit(str.substring(0, str.length-1));
   }
 
   return starBit(str.substring(1, str.length - 1));
}