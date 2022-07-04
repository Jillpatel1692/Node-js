function parrotTrouble(talking, hour){
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  } 
}