function isLucky(n) {
    let lucky = false;
    let nString = n.toString();
    let halfOne = nString.substr(0, nString.length / 2);
    let halfTwo = nString.substr(nString.length / 2);
    let sumHalfOne = 0;
    let sumHalfTwo = 0;
    
    for (i = 0; i < halfOne.length; i++) {
        sumHalfOne = sumHalfOne + Number(halfOne[i]);
    }
    
    for (i = 0; i < halfTwo.length; i++) {
        sumHalfTwo = sumHalfTwo + Number(halfTwo[i]);
    }
    
    if (sumHalfOne === sumHalfTwo) {
        lucky = true;
    }
    
    return lucky;
}
