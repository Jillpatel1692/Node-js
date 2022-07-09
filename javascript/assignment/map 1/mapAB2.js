/*Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.*/
function mapAB2(someMap){
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") === someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}