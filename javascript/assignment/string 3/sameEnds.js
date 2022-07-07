/*Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

Examples

sameEnds('abXYab') → true
sameEnds('xx') → true
sameEnds('xxx') → true*/
function sameEnds(nums, len){
 let front = nums.slice(0, len);
  let end = nums.slice(nums.length - len);

  return front.toString() == end.toString(); 
}