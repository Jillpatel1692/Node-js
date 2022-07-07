/*Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

Examples

xyzThere('abcxyz') → true
xyzThere('abc.xyz') → false
xyzThere('xyz.abc') → true */
function xyzThere(str){
  let x = "xyz";
  for (let i = 0; i < str.length; i++){
    if(str.substring(i, i+3) == x && str.charAt(i-1, i) != "."){
        return true;
    }
  }
    return false;
}