/*Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

Examples

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5*/
function maxTriple(nums){
  let mid = Math.floor(nums.length / 2);
  let start = nums[0]
  let end = nums[nums.length - 1];

  if (nums[mid] > start && nums[mid] > end) {
    return nums[mid];
  }
  else if (start > nums[mid] && start > end) {
    return start;
  } else {
    return end;
  }
}