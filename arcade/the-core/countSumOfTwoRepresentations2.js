function countSumOfTwoRepresentations2(n, l, r) {
    let count = 0;
    
    for (i = l; i <= r; i++) {
        if (i <= (n - i) && (n - i) <= r) count++;
    }
    
    return count;
}
