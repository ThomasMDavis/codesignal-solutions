function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0;
    
    for (i = 0; i < inputArray.length; i++) {
        let newDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
        maxDiff = newDiff > maxDiff ? newDiff : maxDiff;
    }
    
    return maxDiff;
}
