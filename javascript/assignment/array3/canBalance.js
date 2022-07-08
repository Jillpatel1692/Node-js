/*Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

Examples

canBalance([1, 1, 1, 2, 1]) → true
canBalance([2, 1, 1, 2, 1]) → false
canBalance([10, 10]) → true*/
function canBalance(nums){
let a= 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    b += nums[i]; 
  }

  for (let i = 0; i <= nums.length - 2; i++) {
    a += nums[i];
    b -= nums[i];

    if (a == b) {
      return true;
    }
  }

  return false;  
}