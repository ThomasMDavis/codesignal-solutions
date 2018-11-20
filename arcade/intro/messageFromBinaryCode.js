function messageFromBinaryCode(code) {
    let digits = code.match(/.{8}/g);
    let res = "";
    
    for (i = 0; i < digits.length; i++) {
        res += String.fromCharCode(Number(parseInt(digits[i], 2)));
    }
    
    return res;
}
