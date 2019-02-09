function stringsConstruction(a, b) {
    let count = 0;
    
    while (true) {
        for (let char of a) {
            if (b.indexOf(char) === -1) return count;
            
            b = b.replace(char, "");
        }
        
        count++;
    }
}
