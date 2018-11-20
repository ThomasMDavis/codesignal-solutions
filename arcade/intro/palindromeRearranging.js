function palindromeRearranging(inputString) {
    let charCounts = {};
    let char;
    let palindromeSum = 0;
    
    for (i = 0; i < inputString.length; i++) {
        char = inputString[i];
        charCounts[char] = charCounts[char] || 0;
        charCounts[char]++;
    }
    
    for (charCount in charCounts) {
        palindromeSum += charCounts[charCount] % 2;
    }

    return palindromeSum < 2;
}
