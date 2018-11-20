function extractEachKth(inputArray, k) {
    const filtered = inputArray.filter(function(value, index, arr) {
        index = index + 1;
        
        if (index % k !== 0) {
            return index;
        }
    });
    
    return filtered;
}
