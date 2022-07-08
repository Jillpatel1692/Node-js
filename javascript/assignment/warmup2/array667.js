/*Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

Examples

array667([6,6,2]) → 1
array667([6,6,2,6]) → 1
array667([6,7,2,6]) → 1*/
function array667(nums){
   cnt = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] == 6) {
      if (nums[x + 1] == 6 || nums[x + 1] == 7) {
        cnt++;
      }
    }
  } return cnt;
}