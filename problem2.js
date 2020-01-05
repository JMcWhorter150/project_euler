function findEvenFibonacci(num) {
    let sum = 0;
    let total = 1;
    let prevTotal = 1;
    let evenSum = 0;
    while (sum < num) {
        if (sum % 2 === 0) {
            evenSum += sum;
        }
        sum = total + prevTotal;
        prevTotal = total;
        total = sum;
        // console.log(sum);
    }
    // check if number is 
    return evenSum;
}

// fibonacci number = 1, 1, 2, 3
console.log(findEvenFibonacci(4000000));