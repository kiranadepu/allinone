//reverse
let a = "kiran and kumar are friends";


function reverse(str) {
    // var splitString = str.split("");
    // var reverseArray = splitString.reverse();
    // var joinArray = reverseArray.join("");

    var joinArray = str.split("").reverse().join("")
        //.reverse().join("");
    return joinArray;
}
console.log(reverse(a));


function reverseWords(str) {
    //return sentence.split(" ").map(word => word.split('').reverse().join('')).join(' ');
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

console.log(reverseWords(a));