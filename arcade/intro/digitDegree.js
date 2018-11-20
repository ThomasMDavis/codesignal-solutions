let m = 0;

function digitDegree(n) {
    if (n < 10) {
        return m;
    }
    else {
        let t = 0;
        
        while (n > 0) {
            t += n % 10;
            n = Math.floor(n / 10);
        }
        
        m++;    
        return digitDegree(t);
    }
}
