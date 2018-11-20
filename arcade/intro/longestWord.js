function longestWord(text) {
    return text.match(/[A-Za-z]+/g).reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
}
