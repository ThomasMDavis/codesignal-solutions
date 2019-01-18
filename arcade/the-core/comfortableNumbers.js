function comfortableNumbers(l, r) {
    let pairs = 0
    
    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
            if (
                i + sumDigits(i) >= j
                && j - sumDigits(j) <= i
            ) pairs++;
        }
    }
    
    return pairs;
}

function sumDigits(n) {
    let sum = 0;
    
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    
    return sum;
}
