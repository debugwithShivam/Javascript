let arr1 = [1,2]
let arr2 = [...arr1]
arr2.push(3)
// console.log(arr1)
// console.log(arr2)

let arr = [1,3,5,7,9,2,4,6,8,10,12,14,16,18,11,13,15,17,19,20]

console.log([...arr].sort(()=>Math.random() - 0.5).slice(0,5))