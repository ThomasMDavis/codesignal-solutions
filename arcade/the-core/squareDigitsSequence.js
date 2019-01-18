function squareDigitsSequence(a0) {
    let used = new Set();
    
    while (!used.has(a0)) {
        used.add(a0);
        
        a0 = (
            a0.toString()
            .split("")
            .map(x => Number(x) ** 2)
            .reduce((a, b) => a + b)
        );
    }
    
    return used.size + 1;
}
