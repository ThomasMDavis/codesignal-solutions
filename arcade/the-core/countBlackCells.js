function countBlackCells(n, m) {
    const greatestCommonDivisor = (a, b) => b === 0 ? a : greatestCommonDivisor(b, a % b);
    
    return n + m + greatestCommonDivisor(n, m) - 2;
}
