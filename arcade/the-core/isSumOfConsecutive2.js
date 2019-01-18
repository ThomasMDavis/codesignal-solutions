function isSumOfConsecutive2(n) {
    let res = 0;
    
    for (let i = 3; i <= n; i += 2) if (n % i === 0) res++;

    return res;
}
