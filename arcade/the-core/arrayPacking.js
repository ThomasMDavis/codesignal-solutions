function arrayPacking(a) {
    let binaryStr = "";
    
    for (i = a.length - 1; i >= 0; i--) {
        const numZeros = 8 - a[i].toString(2).length;
        
        binaryStr += "0".repeat(numZeros) + "" + Number(a[i].toString(2));
    }
    
    return Number(parseInt(binaryStr, 2));
}
