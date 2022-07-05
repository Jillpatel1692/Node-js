/*Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true */
function doubleX(str){
  i = str.indexOf('x');

        //An x exists and is not the last char
        if (i >= 0 && i < str.length-1)
        {
            return str.charAt(i+1) == 'x';
        }

        return false;
}