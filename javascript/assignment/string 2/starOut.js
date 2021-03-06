/*Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples

starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → silly*/
function starOut(str){
  if(str.length < 1)
        return "";

    if(str.length == 1) {
        if(str.charAt(0) == '*')
            return "";
        else
            return str;
    }

    let len = str.length;
    let arr = new Array();

    let count = 0;


    if(str.charAt(0) != '*' && str.charAt(1) != '*') {
        arr[count] = str.charAt(0);
        count++;
    }

    for(let i = 1; i < str.length - 1; i++) {
        if(str.charAt(i-1)!='*' && str.charAt(i) != '*' &&
            str.charAt(i+1) != '*') {
            arr[count] = str.charAt(i);
            count++;
        }
    }

    if(str.charAt(str.length-1) != '*' &&
        str.charAt(str.length-2) != '*') {
        arr[count] = str.charAt(str.length - 1);
        count++;
    }

    let x = arr.toString();

      return x.replace(/,/g, "");
}