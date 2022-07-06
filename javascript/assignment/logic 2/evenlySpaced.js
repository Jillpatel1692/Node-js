/*Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

Examples

evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false */
function evenlySpaced(a, b, c){
  const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const mid = a + b + c - max - min;
  
    return max - mid == mid - min;
}