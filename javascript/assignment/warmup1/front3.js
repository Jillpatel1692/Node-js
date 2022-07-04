function front3(str){
    if (str <= 3)
    {
      return str + str + str;
    }
    else {
  
      String newString = str.substring(0,3);
  
      return newString + newString + newString;
  
    }
  
  }