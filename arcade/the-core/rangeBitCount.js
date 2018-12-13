function rangeBitCount(a, b) {
    let countOnes = 0;
    let arr = [];
    
    for (i = a; i <= b; i++) {
        arr.push(i);
    }
    
    for (i = 0; i < arr.length; i++) {
        while (arr[i] !== 0) {
            arr[i] = arr[i] & (arr[i] - 1);
            countOnes++;
        }
    }
    
    return countOnes;
}
