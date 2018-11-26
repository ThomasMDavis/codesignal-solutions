function maxMultiple(divisor, bound) {
    for (i = bound; i >= 0; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
}
