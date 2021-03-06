/*We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

Examples

makeChocolate(4, 1, 9) → 4
makeChocolate(4, 1, 10) → -1
makeChocolate(4, 1, 7) → 2 */
function makeChocolate(small, big, goal){
  if (small + big * 5 < goal) {
      return -1;
    }
  
    const bigsNeeded = Math.floor(goal / 5);
  
    const bigsUsed = Math.min(big, bigsNeeded);
  
    const smallsNeeded = goal - bigsUsed * 5;
  
    return smallsNeeded;
}