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