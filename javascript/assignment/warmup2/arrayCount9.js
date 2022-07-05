/*Given an array of ints, return the number of 9's in the array.

Examples

arrayCount9([1,2,9]) → 1
arrayCount9([1,9,9]) → 2
arrayCount9([1,9,9,3,9]) → 3 */
function arrayCount9(nums){
 count = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 9) {
      count++;
    }
  }
  return count; 
}