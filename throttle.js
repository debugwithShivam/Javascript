// function throttling(fn,delay){
//     let isTimer = false;

//     return function(...args){
//         if(isTimer) return 
//         fn(...args)
//         isTimer = true
//         setTimeout(()=>{
//             isTimer = false
//         },delay)
//     }
// }

// let handle = throttling(()=>{
//     console.log('This is a Throttling Algo',new Date().toLocaleTimeString())
// },3000)

// window.addEventListener('click',handle)

let num1 = +prompt("enter a number");
let num2 = +prompt("enter a number");
let num3 = +prompt("enter a number");

if(num1>num2 && num1>num3){
    console.log("Number 1 is greater then num2 and num3")
}else if(num2>num1 && num2>num3){
    console.log("Number 2 is greater then num1 and num3")
}else{
    console.log("Number 3 is greater then num1 and num2")
}
