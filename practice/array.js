let numbers = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7]
//let numbers = ["a", "b", "c", "c", "d", "e", "e", "e", "f"];
//using includes
function rmd(data) {
  let unique = [];
  data.forEach((ele) => {
    if (!unique.includes(ele)) {
      unique.push(ele);
    }
  });
  return unique;
}
console.log("method rmd =====", rmd(numbers));
//set
function setM(data) {
  let unique = [];
  unique = [...new Set(data)];
  return unique;
}
console.log("method setM =====", setM(numbers));

//filter
function filterM(data) {
  //let unique = []
  //return data.filter((value, index) => data.indexOf(value) === index)
  return data.filter((value, index) => {
    return data.indexOf(value) === index;
  });
}

console.log("method filter =====", filterM(numbers));

function forM(numbers) {
  let isDuplicate = [];
  let count = 0;
  var start = false;
  // Outer for loop
  for (let i = 0; i < numbers.length; i++) {
    // Inner for loop
    for (let j = 0; j < isDuplicate.length; j++) {
      // Check for duplicate
      if (numbers[i] === isDuplicate[j]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      isDuplicate.push(numbers[i]);
    }
    start = false;
    count = 0;
  }
  return isDuplicate;
}

console.log("method forM =====", forM(numbers));

function removeDuplicates(array) {
  const result = [];
  //var k = 0
  for (let i = 0; i < array.length; i++) {
    let exists = false;
    for (j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
      }
    }
    if (!exists) {
      result.push(array[i]);
      // result[k] = array[i]
      // k++
    }
  }
  return result;
}
console.log("method forM diff =====", removeDuplicates(numbers));

function sortArrays(arr) {  
  let length = arr.length;// Finding the length of array 'arr' 
  for (let j = 0; j < length - 1; j++) { // Sorting using a single loop    
    if (arr[j] > arr[j + 1]) { // Checking the condition for two // simultaneous elements of the array     
      let temp = arr[j]; // Swapping the elements.
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      // updating the value of j = -1
      // so after getting updated for j++
      // in the loop it becomes 0 and
      // the loop begins from the start.
      j = -1;
    }
  }
  return arr;
}

//count

function countdup(data) {
  let counts = {};
  data.forEach((ele) => {
    counts[ele] = (counts[ele] || 0) + 1;
  });
  return counts;
}
console.log("method count dupli =====", countdup(numbers));

function sum(x, y, z) {
  return x + y + z;
}

const numbers1 = [1, 2, 3];

console.log(sum(...numbers1));
// expected output: 6

console.log(sum.apply(null, numbers1));
// expected output: 6




console.log(1 + "2" + "2"); 
console.log("1" + +"2" + "2"); 
console.log(1 + -"1" + "2"); 
console.log(+"1" + "1" + "2"); 
console.log( "A" + "B" + "2");
console.log( "A" - "B" + "2");
console.log( "A" + "3" + 2);