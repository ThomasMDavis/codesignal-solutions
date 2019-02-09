function isSubstitutionCipher(string1, string2) {
    return [...string1].every(
        (char1, char2) => string1.indexOf(char1) === string2.indexOf(string2[char2])
    );
}
