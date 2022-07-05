/*Given three int values, a b c, return the largest.

Examples

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3 */
function intMax(a, b, c){
  if(a > b && a > c)
  return a;
  else if(b > c)
  return b;
  else return c; 
}