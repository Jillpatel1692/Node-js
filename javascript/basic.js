// This is how we do comment in Javascript file.

// Type of Data
let m = 3; //number
let n = "abc"; //string
let o = {
  id: "abc123",
  name: "abc",
  age: "20",
};

let x, y, z; //var declare
var p;
const s = 20;
let xyz = "xyz";
xyz = "pqr";
x = 5; // var assignment
y = 6;
z = x + y; //arithmatic operation

console.log("x: ", x, "y: ", y, "z: ", z); // print in terminal
// arithmatic operator
let w = 2;
let v = 3;
console.log("v+w", v + w); //add
console.log("v-w", v - w); //sub
console.log("v*w", v * w); // mul
console.log("v**w", v ** w); // exp
console.log("v/w", v / w); //div
console.log("v%w", v % w); //modul
console.log("++v", ++v); //inc
console.log("--w", --w); //dec

//assignment oper
let a = 3;
let b = "3";

console.log("\na==b: ", a == b); //compare just value t
console.log("a===b: ", a === b); //compare values and type f

//array
let arr = [0, 1, 2, 3, 5, 4]; //javascript extension  -> typescript
//javascript not bound to data type and typescript bound to data type
// console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.length);
console.log(arr.reverse());

const result = arr.filter((item) => {
  return item >= 4;
});
console.warn("\n filtered vale from array : ", result);
//filter array.radio ? hw
//string methods
let str1 = "Hello Everyone";
console.log("string length : ", str1.length);

//slice(startIndex, endIndex)//end from -1
console.log(str1.slice(6, 9)); //element 6,7,8
console.log(str1.slice(-8, -2)); //start 0 end -1 value -8,-7,-6,-5,-4,-3

//substring(startIndex, endIndex) //start from o
console.log(str1.substring(6, 9)); //
console.log(str1.substring(-2, 4)); //0,1,2,3

//substr(startIndex, count)
console.log(str1.substr(0, 2));
console.log(str1.substr(0));

console.log(str1.indexOf("e"));

//function
let answer = mult(2, 3);
function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("less than 5");
  } else {
    console.log("greater");
  }
  switch (a) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    default:
      console.log(a);
      break;
  }
  return a * b;
}
console.log(answer);
