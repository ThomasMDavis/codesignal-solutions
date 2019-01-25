function adjacentElementsProduct(inputArray) {
    let largestProduct = inputArray[0] * inputArray[1];
    
    for (i = 1; i < inputArray.length - 1; i++) {
        largestProduct = Math.max(largestProduct, inputArray[i] * inputArray[i + 1]);
    }
    
    return largestProduct;
}
