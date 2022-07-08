/*We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

Examples

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false*/
function unlucky1(nums){
  lastP = nums.length-1;
	if(lastP  >= 2)
	{
		if((nums[0] == 1 && nums[1] == 3) || (nums[1] == 1 && nums[2] == 3))
			return true;
		return (nums[lastP-1] == 1 && nums[lastP] == 3);
	}
	if(lastP  == 1)
		return ((nums[0] == 1 && nums[1] == 3) || (nums[1] == 1 && nums[2] == 3));
	return false;
}