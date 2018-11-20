function differentSymbolsNaive(s) {
    let uniqueChars = [];
    
    for (i = 0; i < s.length; i++) {
        if (!uniqueChars.includes(s[i])) {
            uniqueChars.push(s[i]);
        }
    }
    
    return uniqueChars.length;
}
