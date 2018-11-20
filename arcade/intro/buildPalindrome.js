function buildPalindrome(st) {
    const stLen = st.length;
    let addToSt = "";
    
    for (i = 0; i < stLen; i++) {
        if (checkPalindrome(st + reverseString(addToSt))) {
            return st + reverseString(addToSt);
        }
        
        addToSt += st[i];
    }
}

function checkPalindrome(inputString) {
    return inputString === reverseString(inputString);
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}