/*Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

Examples

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false */
function nearHundred(n){
   ANSWER = false;

 if ( n + 10 >= 100 && n - 10 <= 100)
 {
       ANSWER = true;
 }
       else if ( n + 10 >= 200 && n - 10 <=200)
       {
       ANSWER = true;
       }
return ANSWER;
        
}