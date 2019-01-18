function pagesNumberingWithInk(current, numberOfDigits) {
    while (numberOfDigits >= numDigits(current)) {
        numberOfDigits -= numDigits(current);
        current++;
    }
    
    return current - 1;
}

function numDigits(n) {
    return Math.floor(Math.log10(n)) + 1;
}
