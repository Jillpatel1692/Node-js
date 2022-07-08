/*Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr*/
function altPairs(str){
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(x, end);
  }
  return result;
}