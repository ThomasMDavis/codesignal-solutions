function isIPv4Address(inputString) {
    return /^([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5])\.([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5])\.([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5])\.([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5])$/.test(inputString);
}
