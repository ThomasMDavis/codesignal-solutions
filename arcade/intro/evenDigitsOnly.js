function evenDigitsOnly(n) {
    n = n.toString(10).split("").map(function(t) {
        return parseInt(t);
    });
    
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            return false;
        }
    }
    
    return true;
}
