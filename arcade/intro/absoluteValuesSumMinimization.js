function absoluteValuesSumMinimization(a) {
    return a.length % 2 === 0 ? a[Math.floor((a.length / 2) - 1)] : a[Math.floor(a.length / 2)];
}
