let arr = [1, 1, 2, 2, 3, 3, 4, 4];
let result = [];
for (let i = 0; i < arr.length; i++) {
    let isDuble = false;
    for (let j = 0; j < result.length; j++) {
        if (arr[i] == result[j]) {
            isDuble = true;
            break;
        };
    };
    if (!isDuble) {
        result.push(arr[i]);
    };
};

console.log(result);
// 1 == 

// let array = [1, 1, 2, 2, 3, 3, 4, 4];

// for (let i = 1; i < array.length; i++) {
    // if (array[i] != array[i - 1]) {
        // console.log(array[i]);
    // }
    // console.log(array[i-1]);
// }

// 1 