function deleteDigit(n) {
    let digitArr = getDigits(n);
    const digitArrOld = digitArr.slice();
    let maxNumber = 0;
    
    for (i = 0; i < digitArr.length; i++) {
        digitArr.splice(i, 1);
        const testNumber = Number(digitArr.join(""));
        maxNumber = Math.max(testNumber, maxNumber);
        digitArr = digitArrOld.slice();
    }
    
    return maxNumber;
}

function getDigits(n) {
    return n.toString().split("");
}
