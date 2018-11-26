function phoneCall(min1, min2_10, min11, s) {
    let minutes = 0;
    let rate = min1;
    
    while (s > 0) {
        minutes++;
        rate = minutes === 2 ? min2_10 : minutes > 10 ? min11 : rate;
        s -= rate;
        
        if (s < 0) {
            minutes--;
        }
    }

    return minutes;
}
