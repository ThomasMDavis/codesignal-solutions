function lineUp(commands) {
    let count = 0;
    let pair = true;
 
    for (i = 0; i < commands.length; i++) {
        if (commands[i] === 'L' || commands[i] === 'R') pair = !pair;
        if (pair) count++;
    }
 
    return count;
}
