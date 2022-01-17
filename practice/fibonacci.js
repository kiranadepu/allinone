function fabbi(number) {
  let n1 = 0;
  let n2 = 1;
  let n3;
  //console.log("Fibonacci Series: ",n1,n2)
  for (var i = 1; i <= number; i++) {
    console.log("<br>", n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  //return 0
}

fabbi(11);
//console.log(res)bvbvc

const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};

const a = { name: "John", age: 26 };
const b = { name: "John", age: 26 };

let date1 = equals(a, b); // true
console.log(date1);

const c = { name: "John" };
const d = { name: "John", age: undefined };

let date2 = equals(c, d); // false
console.log(date2);

const k1 = { a: 1, b: 1, c: 1, d: 1 };

const k2 = { a: 1, b: 1, c: 1, d: 1 };



function validation(k1, k2) {
  let count = 0;
  Object.keys(k1).forEach((element) => {
    Object.keys(k2).forEach((item) => {
      if (k1[element] == k2[item] && element == item) {
        //console.log(item,k2[item])
      } else if (k1[item] != k2[item] && element != item) {
        count++;
      }
    });
  });
  return count == 0;
}

let data = validation(k1, k2);


//var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const pets = [1, 2, 3, 4,1,3];

var petCounts = pets.reduce(function(obj, pet){
    console.log(obj); 
     console.log(pet); 
     if (!obj[pet]) {
       obj[pet] = 1;
    } else {
        obj[pet]++;
     }
     return obj;
}, {});

console.log(petCounts); 
