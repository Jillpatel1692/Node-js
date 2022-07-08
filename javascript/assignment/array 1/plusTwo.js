/*Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

Examples

plusTwo([1, 2], [3, 4]) → 1,2,3,4
plusTwo([4, 4], [2, 2]) → 4,4,2,2
plusTwo([9, 2], [3, 4]) → 9,2,3,4*/
function plusTwo(a, b){
  let Arr = new Array();
  Arr[0] = a[0];
  Arr[1] = a[1];
  Arr[2] = b[0];
  Arr[3] = b[1];

  return Arr;
}