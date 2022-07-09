/*Given a string, compute recursively a new string where all the 'x' chars have been removed.

Examples

noX('xaxb') → ab
noX('abc') → abc
noX('xx') →*/
function noX(str){
   if (str.length == 0){
     return "";
   }
 
   if (str.charAt(0) == "x"){
     return noX(str.substring(1));
   } else {
     return str.charAt(0) + noX(str.substring(1));
   }
}