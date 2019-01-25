function reverseInParentheses(s) {
    if (!(s.includes("("))) return s;
    
    return reverseInParentheses(reverseOnce(s));
}

function reverseOnce(s) {
    const regex = /\(([^()]*)\)/i;
    
    const substr = (
        regex.exec(s)[1]
            .split("")
            .reverse()
            .join("")
    );
    
    return s.replace(regex, substr);
}
