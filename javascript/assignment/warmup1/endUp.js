/*Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

Examples

endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI */
function endUp(str){
if (str.length > 3) {
return (str.substring(0, str.length - 3) + (str.substring((str.length - 3), str.length)).toUpperCase());
} else {
return str.toUpperCase();
}  
}