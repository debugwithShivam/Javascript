function debouncing(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function log(message) {
    console.log(message);
}

const debouncedLog = debouncing(log, 3000);
debouncedLog('h');
debouncedLog('he');
debouncedLog('hell');
debouncedLog('hello');






