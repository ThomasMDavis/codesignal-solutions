function isPower(n) {
    if (n === 1) return true;
    
    let j = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (j = 2; i ** j < n; j++);
        
        if (i ** j === n) return true;
    }
    
    return false;
}
