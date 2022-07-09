/*Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".*/
function topping2(someMap){
   if (someMap.has("ice cream")) {
    someMap.set("yogurt", someMap.get("ice cream"));
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}