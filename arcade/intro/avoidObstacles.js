function avoidObstacles(inputArray) {
    inputArray.sort(sortNumber);
    const oldArray = inputArray.slice();
    const largestElement = oldArray[oldArray.length - 1];
    
    for (let i = 1; i < largestElement ** 2; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            inputArray[j] = inputArray[j] % i;
        }
        
        if (!inputArray.includes(0)) {
            return i;
        }
        else {
            inputArray = oldArray.slice();
        }
    }
}

function sortNumber(a, b) {
    return a - b;
}
