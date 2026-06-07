function throttling(fn,delay){
    let isTimer = false;

    return function(...args){
        if(isTimer) return 
        fn(...args)
        isTimer = true
        setTimeout(()=>{
            isTimer = false
        },delay)
    }
}

let handle = throttling(()=>{
    console.log('This is a Throttling Algo',new Date().toLocaleTimeString())
},3000)

window.addEventListener('click',handle)