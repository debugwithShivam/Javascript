function gcd(a,b){
    if(b===0) return a;
    return gcd(b,a%b)
}

console.log(gcd(48,18))


function towersOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    // Step 1: Move top n-1 disks from source to auxiliary
    towersOfHanoi(n - 1, source, destination, auxiliary);

    // Step 2: Move the nth disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Step 3: Move the n-1 disks from auxiliary to destination
    towersOfHanoi(n - 1, auxiliary, source, destination);
}

// Example: Move 3 disks from A to C using B as auxiliary
towersOfHanoi(3, 'A', 'B', 'C');