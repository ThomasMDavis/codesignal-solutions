function isTandemRepeat(inputString) {
    const middle = Math.ceil(inputString.length / 2);
    const half1 = inputString.slice(0, middle);
    const half2 = inputString.slice(middle);
    
    if (half1 === half2) return true;
    
    return false;
}
