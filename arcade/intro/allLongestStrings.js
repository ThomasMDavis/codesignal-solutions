function allLongestStrings(inputArray) {
    let longestStringLen = 0;
    let outputArray = [];
    
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestStringLen) {
            outputArray = [inputArray[i]];
            longestStringLen = inputArray[i].length;
        }
        else if (inputArray[i].length === longestStringLen) {
            outputArray.push(inputArray[i]);
        }
    }
    
    return outputArray;
}
