function leastFactorial(n) {
    let currentFac = 1;
    
    for (i = 1; i < 120; i++) {
        currentFac *= i;
        if (currentFac >= n) {
            return currentFac;
        }
    }
}
