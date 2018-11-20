function commonCharacterCount(s1, s2) {
    const s1Chars = s1.split("").sort();
    const s2Chars = s2.split("").sort();
    let s1Arr = [];
    let s2Arr = [];
    let count = 0;
    
    for (i = 0; i < s1Chars.length; i++) {
        let s1CharCount = 0;
        let s2CharCount = 0;
        
        if (s1Chars[i] === s1Chars[i - 1]) {
            
        }
        else {
            for (j = 0; j < s1Chars.length; j++) {
                s1CharCount = s1Chars[i] === s1Chars[j] ? s1CharCount + 1 : s1CharCount;
            }
            
            s1Arr.push([s1Chars[i], s1CharCount]);
        }
    }
    
    for (i = 0; i < s2Chars.length; i++) {
        let s1CharCount = 0;
        let s2CharCount = 0;
        
        if (s2Chars[i] === s2Chars[i - 1]) {
            
        }
        else {
            for (j = 0; j < s2Chars.length; j++) {
                s2CharCount = s2Chars[i] === s2Chars[j] ? s2CharCount + 1 : s2CharCount;
            }
            
            s2Arr.push([s2Chars[i], s2CharCount]);
        }
    }
    
    for (i = 0; i < s1Arr.length; i++) {
        for (j = 0; j < s2Arr.length; j++) {
            count = s1Arr[i][0] === s2Arr[j][0] ? count + Math.min(s1Arr[i][1], s2Arr[j][1]) : count;
        }
    }
    
    return count;
}
