function mirrorBits(a) {
    return parseInt(Number(a.toString()).toString(2).split("").reverse().join(""), 2);
}
