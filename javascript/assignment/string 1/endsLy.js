/*Given a string, return true if it ends in "ly".

Examples

endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false */
function endsLy(str){
  if (str.substring(str.length - 2, str.length) == 'ly') {
    return true;
  } else {
    return false;
  }
}