//reverse
let a = "kiran and kumar are friends";

function reverse(str) {
  // var splitString = str.split("");
  // var reverseArray = splitString.reverse();
  // var joinArray = reverseArray.join("");

  var joinArray = str.split("").reverse().join("");
  //.reverse().join("");
  return joinArray;
}
console.log(reverse(a));

function reverseWords(str) {
  //return sentence.split(" ").map(word => word.split('').reverse().join('')).join(' ');
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords(a));

let str = ["a", "b", "c", "a", "d", "d", "c", "b", "e"];

const counts = {};

// for(const s in str){
//     counts[s]=counts[s] ? counts[s]+1 : 1
// }
str.forEach((ele) => {
  counts[ele] = counts[ele] ? counts[ele] + 1 : 1;
});
console.log(counts);

function reverse1(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"));

var str1 = "aabacbcbbbcdaacc";
var findmax = (str1) => {
  var arr = [];
  arr = str1.split(""); // console.log(arr)
  var obj = {};
  var key = Object.keys(obj); //console.log(key)
  arr.forEach((x) => {
    // obj[x] = (obj[x] || 0) + 1
    obj[x] = obj[x] ? obj[x] + 1 : 1;
  });
  // var objects = obj;  //console.log(objects)
  var val = Object.keys(obj).map((k) => obj[k]); //    console.log(val)
  var max = Math.max.apply(null, val); //    console.log(max);
  for (key in obj) {
    if (obj[key] === max) {
      return {
        [key]: max,
      };
    }
  }
};

console.log("hiegrst value in the object", findmax(str1));
