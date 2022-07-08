/*Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

Examples

noTriples([1,1,2,2,1]) → true
noTriples([1,1,2,2,2,1]) → false
noTriples([1,1,2,2,2,1]) → false*/
function noTriples(nums){
  for (x = 0; x < nums.length - 2; x++) {
    a = nums[x];
    if (a == nums[x + 1]) {
      if (a == nums[x + 2]) {
        return false;
      }
    }
  } return true;
}