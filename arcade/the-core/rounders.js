function rounders(value) {
    let count = 0
    
    while (value > 10) {
        value = Math.round(value / 10);
        count++;
    }
    
    return value * (10 ** count);
}
