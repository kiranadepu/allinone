function User() {
    this.name = 'something';
}

var clients = new Set();

var a = new User();
var b = new User();
clients.add(a);
clients.add(b);

for (var user of clients) {
    console.log(user.name + ' iterated');
}


for (let i = 0; i < 5; i++) {
    console.log(i)
}


for (var i = 0; i < 5; i++) {
    console.log(i)
}


let a1 = [1, 2, 3]

let a2 = [4, 2, 3]

let a3 = [a1, [...a2]]
console.log(a3)



const names = {
    father: "Johnny",
    brother: "Billy",
    sister: "Sandy"
}

const newNames = Object.keys(names).reduce((object, key) => {
    if (key !== "father") {
        object[key] = names[key]
    }
    return object
}, {})


console.log(newNames);

let srra = ["diras","dirad","firaa","cirai","airah"];

console.log(srra)
let res = srra.sort()

console.log(res)