/*Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

Examples

countYZ('fez day') → 2
countYZ('day fez') → 2
countYZ('day fyyyz') → 2*/
function countYZ(str){
  
    let count=0;
    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[a-z]/i) || str.charAt(i) == " ") {
  
          if (str.charAt(i-1).toLowerCase() == "y" || str.charAt(i-1).toLowerCase() == "z"){
          count += 1;
        }
      }
      if (i == str.length-1) {
          if (str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "z"){
          count += 1;
        }
      }
    }
    return count;
  
  }