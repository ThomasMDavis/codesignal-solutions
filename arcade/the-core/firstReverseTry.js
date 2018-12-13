function firstReverseTry(arr) {
    if (arr.length <= 1) return arr;
    
    const temp = arr[0];
    
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    
    return arr;
}
