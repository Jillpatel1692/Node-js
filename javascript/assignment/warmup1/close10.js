/*Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

Examples

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0 */
function close10(a, b){
    temp1 = Math.abs(a - 10);

   temp2 = Math.abs(b - 10);

 

  if (temp1 == temp2)

    return 0;

  else if (temp1 > temp2)

    return b;

  else

    return a;

}