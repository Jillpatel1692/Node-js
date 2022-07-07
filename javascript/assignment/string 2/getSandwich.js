/*A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

Examples

getSandwich('breadjambread') → jam
getSandwich('xxbreadjambreadyy') → jam
getSandwich('xxbreadyy') → */
function getSandwich(str){
 First = str.indexOf("bread");
	Last = str.lastIndexOf("bread");
	if(First != -1 && Last != -1 && First != Last)
		return str.substring(First+5, Last);
	return ""; 
}