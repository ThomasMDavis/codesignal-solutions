function replaceMiddle(arr) {
    if (arr.length % 2 !== 0) return arr;
    
    const middle = (arr.length / 2) - 1;
    
    arr[middle] = (
        arr[middle + 1]
        + arr[middle]
    );

    arr.splice(middle + 1, 1);

    return arr;
}
