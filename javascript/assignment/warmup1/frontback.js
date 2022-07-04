function frontBack(str) {
    if (str.length <= 1) {
      return str;
    }
    mid = str.substring(1, str.length - 1);
  
    return (str.charAt(str.length - 1)) + mid + str.charAt(0);
  }