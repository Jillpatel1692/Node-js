/*Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

Examples

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6*/
function withoutDoubles(die1, die2, noDoubles){
 if (noDoubles) {
      if (die1 == die2) {
        if (die1 == 6 || die2 == 6) {
          die1 = 1;
          return die1 + die2;
        }
        return die1 + die2 + 1;
      }
    }
    return die1 + die2; 
}