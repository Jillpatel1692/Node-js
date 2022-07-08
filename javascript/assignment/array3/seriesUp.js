/*Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.

Examples

seriesUp(3) → 1,1,2,1,2,3
seriesUp(4) → 1,1,2,1,2,3,1,2,3,4
seriesUp(2) → 1,1,2*/
function seriesUp(n){
  let modArr = [];

  for (let i = 0; i < n; i++) {
    let j = i;
    let x = 1;
    while (j >= 0) {
      modArr.push(x);
      x += 1;
      j--;
    }
    x = 1;
  }
  return modArr; 
}