//let numbers = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7]
let numbers = ["a", "b", "c", "c", "d", "e", "e", "e", "f"]
    //using includes
function rmd(data) {
    let unique = []
    data.forEach(ele => {
        if (!unique.includes(ele)) {
            unique.push(ele)
        }
    })
    return unique
}
console.log("method rmd =====", rmd(numbers));
//set 
function setM(data) {
    let unique = []
    unique = [...new Set(data)]
    return unique
}
console.log("method setM =====", setM(numbers));

//filter 
function filterM(data) {
    //let unique = []
    //return data.filter((value, index) => data.indexOf(value) === index)
    return data.filter((value, index) => {
        return data.indexOf(value) === index
    })
}

console.log("method filter =====", filterM(numbers));


function forM(numbers) {
    let isDuplicate = [];
    let count = 0
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
    return isDuplicate
}

console.log("method forM =====", forM(numbers))

function removeDuplicates(array) {
    const result = [];
    //var k = 0
    for (let i = 0; i < array.length; i++) {
        let exists = false;
        for (j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                exists = true;
                // break;
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
console.log("method forM diff =====", removeDuplicates(numbers))


//count

function countdup(data) {
    let counts = {}
    data.forEach(ele => {
        counts[ele] = (counts[ele] || 0) + 1
    })
    return counts
}
console.log("method count dupli =====", countdup(numbers))



function sum(x, y, z) {
    return x + y + z;
}

const numbers1 = [1, 2, 3];

console.log(sum(...numbers1));
// expected output: 6

console.log(sum.apply(null, numbers1));
// expected output: 6