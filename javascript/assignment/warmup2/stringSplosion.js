/*Given a non-empty string like "Code" return a string like "CCoCodCode" */
function stringSplosion(str){
  r = '';
  for (x = 0; x < str.length - 1; x++) {
    r = r + str.substring(0, x + 1);
  }
  return r;
}