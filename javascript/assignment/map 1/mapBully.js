/*Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.*/
function mapBully(someMap){
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}