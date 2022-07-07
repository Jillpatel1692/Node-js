/*Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

Examples

repeatEnd('Hello', 3) → llollollo
repeatEnd('Hello', 2) → lolo
repeatEnd('Hello', 1) → o */
function repeatEnd(str, n){
 let repStr = "";
  let sub = str.substring(str.length - n);

    while (n != 0) {
        repStr += sub;
        n--
    }

    return repStr; 
}