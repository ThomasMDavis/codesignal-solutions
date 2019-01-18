function properNounCorrection(noun) {
    return (
        noun.charAt(0).toUpperCase()
        + noun.slice(1).toLowerCase()
    );
}
