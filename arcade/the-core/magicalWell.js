function magicalWell(a, b, n) {
    let money = 0;
    
    for (i = 0; i < n; i++) {
        money += a * b;
        a++;
        b++;
    }
    
    return money;
}
