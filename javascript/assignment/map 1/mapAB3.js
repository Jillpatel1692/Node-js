/*Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.*/
function mapAB3(someMap){
    if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (!someMap.has("a") && someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}