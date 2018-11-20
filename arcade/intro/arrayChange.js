function arrayChange(inputArray) {
    let moves = 0;
    
    for (i = 0; i < inputArray.length; i++) {
        if (!isNaN(inputArray[i - 1])) {
            if (inputArray[i] === inputArray[i - 1]) {
                moves++;
                inputArray[i]++;
            }
            else if (inputArray[i] < inputArray[i - 1]) {
                moves += inputArray[i - 1] - inputArray[i] + 1;
                inputArray[i] += inputArray[i - 1] - inputArray[i] + 1;
            }
        }
    }
                              
    return moves;
}
