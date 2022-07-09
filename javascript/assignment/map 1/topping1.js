/*Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".*/
function topping1(someMap){
   if (someMap.has("ice cream")) {
    someMap.set("ice cream", "cherry");
  }
  someMap.set("bread", "butter");
  return someMap;
}