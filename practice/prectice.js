var str1 = "aabacbcbbbcdaacc";


let uni = []

str1.split('').forEach(ele=>{
if(!uni.includes(ele)){
    uni.push(ele)
}

})

console.log(uni)

