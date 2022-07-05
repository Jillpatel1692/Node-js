/*Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false */
function stringE(str){
 count=0;
        for ( i = 0; i < str.length; i++) {
            if (str.charAt(i)=='e')
                count++;
        }
        return (count>=1&&count<=3);
}