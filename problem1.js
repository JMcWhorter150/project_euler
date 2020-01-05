function multiples3And5(max) {
    let sum = 0;
    // loop through all numbers below max
    for (let i=1;i<max;i++) {
        // check if number is divisible by 3 OR 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    // add number to sum
    return sum;
}

console.log(multiples3And5(1000));