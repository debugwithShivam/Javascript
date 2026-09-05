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

// console.log(loop(10))

function object(fun,a="8549",b){
     let obj = {
        name:"shivam",
        age:12,
        class:"12th",
        roll:"Frontend"
    }
    
    return fun(obj)
}

const createFunction = (fun) => {
    object((prev)=>{
        return fun(prev)
    })
}


createFunction((a)=>({
    ...a,
}))

// console.log(object.prototype)
// console.log(object.prototype = {name:"snu"})
// console.log(object.prototype)
// console.log(object.prototype.name)

let li = [
    {name:"shivam"},
    {name:"sonu"},
    {name:"prince"},
    {name:"riya"},
    {name:"harsh"},
]



let name = ""
let list = li.filter((item)=>item.name!==name)
console.log(list)

let ul = document.querySelector('ul')


list.map((item)=>{
    let liTag = document.createElement('li') 
    liTag.innerText += item.name
    ul.append(liTag)
})



