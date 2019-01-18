function isSmooth(arr) {
    const last = arr[arr.length - 1];
    const middle = (
        arr.length % 2 === 0
        ? arr[(arr.length / 2)] + arr[((arr.length / 2) - 1)]
        : arr[(arr.length - 1) / 2]
    );
    
    return arr[0] === last && arr[0] === middle;
}
