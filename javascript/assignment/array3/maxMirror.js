/*We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.

Examples

maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
maxMirror([1, 2, 1, 4]) → 3
maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2*/
function maxMirror(nums){
    len = nums.length;

   count= 0;

   max = 0;

  for ( i = 0; i < len; i++){

    count=0;

    for ( j = len-1; i + count < len && j > -1; j--){

      if(nums[i+count] == nums[j]){

        count++;

      }

      else{

        if (count > 0){

          max = Math.max(count,max);

          count = 0;

        }

      }

    }

    max = Math.max(count,max);

  }

  return max;
}