function sumUpNumbers(inputString) {
    const numsArr = inputString.match(/\d+/g);
    let sum = 0;
    
    if (numsArr === undefined || numsArr === null) {
        return 0;
    }
    
    for (i = 0; i < numsArr.length; i++) {
        sum += Number(numsArr[i]);
    }
    
    return sum;
}
