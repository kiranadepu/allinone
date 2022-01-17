let arr = [1, 2, 4, 3, 9, 8, 7];

function arraysort(arr) {
    let temp = 0
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr)
    if (arr[i] > arr[i + 1]) {
        console.log(arr)
      temp = arr[i];
      arr[i] = arr[i + 1]
      arr[i + 1] = temp;
      i = -1;
    }
  }
  return arr;
}

// function arrsort(arr){
//     return res = [...new Set(arr)]
// }

console.log(arraysort(arr));
