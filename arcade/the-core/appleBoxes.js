function appleBoxes(k) {
    let yellows = 0;
    let reds = 0;
    
    for (i = 1; i <= k; i++) {
        if (i % 2 === 0) yellows += i * i;
        else reds += i * i;
    }
    
    return yellows - reds;
}
