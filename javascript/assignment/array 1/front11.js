/*Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

Examples

front11([1, 2, 3], [7, 9, 8]) → 1,7
front11([1], [2]) → 1,2
front11([1, 7], []) → 1*/
function front11(a, b){
  let sections = [ a, b]

  let nA = [];

  for (let section of sections) {
    if (section.length == 0) {

    } else {
      nA.push(section[0]);
    }
  }

  return nA;
}