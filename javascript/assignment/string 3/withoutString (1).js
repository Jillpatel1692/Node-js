/*Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

Examples

withoutString('Hello there', 'llo') → He there
withoutString('Hello there', 'e') → Hllo thr
withoutString('Hello there', 'x') → Hello there*/
function withoutString(base, remove){
  let rlen = remove.length;

  let res = "";

  for (let i = 0; i < base.length; i++){
    let sub = base.substring(i, i+ rlen);
    if (sub.toLowerCase() != remove.toLowerCase()) {
        if (base[i] == " " && res.charAt(res.length-1) == " "){
        }  else {
            res += base[i];
        }
    }  else {
      i += rlen-1;
    }
  }
  return res;
}