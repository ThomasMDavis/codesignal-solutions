function isBeautifulString(inputString) {
    let array = [];
    array = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0);
    
    for (i = 0; i < inputString.length; i++) {
        array[inputString[i].charCodeAt() - 97]++;
    }
    
    for (i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            return false;
        }
    }
    
    return true;
}
