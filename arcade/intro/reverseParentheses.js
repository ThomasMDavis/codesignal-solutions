function reverseParentheses(s) {
    if (s.includes("(")) {
        return reverseParentheses(reverseOnce(s));
    }
    else {     
        return s;
    }
}

function reverseOnce(s) {
    const regex = /\(([^()]*)\)/i;
    let subStr = regex.exec(s)[1];
    
    subStr = subStr.split("").reverse().join("");
    
    return s.replace(regex, subStr);
}
