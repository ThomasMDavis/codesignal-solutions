function alphabeticShift(inputString) {
    let newString = "";
    
    for (i = 0; i < inputString.length; i++) {
        if (96 < inputString.charCodeAt(i) && inputString.charCodeAt(i) < 123) {
            newString += String.fromCharCode(inputString.charCodeAt(i) + 1);
        }
        
        newString = newString.replace("{", "a");
    }
    
    return newString;
}
