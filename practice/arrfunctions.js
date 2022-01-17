//slice

// The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.

// array.slice(from, until);

var array2 = [6, 7, 8, 9, 0];
let arr = array2.slice(2, 3)
console.log("slice ================", arr);


//splice
//The splice( ) method changes an array, by adding or removing elements from it
//array.splice(index, number of elements);

//adding

var cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("splice ================add", cars);

//removing
var buss = ['Benz', 'Innova', 'ambassedor', 'BMW', 'Audi', 'Breeza', 'Etios', 'Dzire'];
buss.splice(2, 3);
console.log("splice ================rem", buss);

// Split ( )
// Slice( ) and splice( ) methods are for arrays. The split( ) method is used for strings. It divides a string into substrings and returns them as an array. It takes 2 parameters, and both are optional
var myString = "kiran kumar adepu";
let newArray = myString.split(",", 3);