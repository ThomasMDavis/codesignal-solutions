function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i] === elemToReplace ? substitutionElem : inputArray[i];
    }
    
    return inputArray;
}
