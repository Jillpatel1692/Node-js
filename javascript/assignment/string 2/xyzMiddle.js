/*Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false */
function xyzMiddle(str){
   xyz = "xyz";

  len = str.length;

  middle = len / 2;

   

  if (len < 3)
  {
    return false;
}
  if (len % 2 != 0) {

    if (xyz== (str.substring(middle-1,middle+2))) {

      return true;

    } else {

        return false;

      }

  } else if (xyz==(str.substring(middle-1,middle+2)) || xyz==(str.substring(middle-2,middle+1))) {

          return true;

  } else

      return false; 

}

}