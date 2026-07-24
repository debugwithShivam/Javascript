// let hold = 1;
// for(let i = 1; i<4;i++){
//     let str = ""
//     for(let j = 1;j<4;j++){
//         let a = str += `${hold} `
//         hold++;
//     }
//     console.log(str)
// }

function loop(n) {
    if (n < 0) return
    console.log(n)
    return loop(n - 1)
}

console.log(loop(10))