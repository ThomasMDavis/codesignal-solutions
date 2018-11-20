function arrayMaxConsecutiveSum(inputArray, k) {
    let result = 0;
    let currentSum = 0;

    for (i = 0; i < k - 1; i++) {
        currentSum += inputArray[i];
    }
    
    for (i = k - 1; i < inputArray.length; i++) {
        currentSum += inputArray[i];
        result = Math.max(result, currentSum);
        currentSum -= inputArray[i - k + 1];
    }

    return result;
}
